import React, { useContext } from 'react';
import { Link } from 'gatsby';
import {
  Header as ShellHeader,
  HeaderMenuButton,
  SkipToContent,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from 'carbon-components-react';
import { Switcher20, Close20 } from '@carbon/icons-react';
import cx from 'classnames';

import HeaderNav from 'gatsby-theme-carbon/src/util/context/NavContext';
import GlobalSearch from 'gatsby-theme-carbon/src/components/GlobalSearch/index';
import NavContext from 'gatsby-theme-carbon/src/util/context/NavContext';
import useMetadata from 'gatsby-theme-carbon/src/util/hooks/useMetadata';

import { header, skipToContent, headerButton, headerWithHeaderNav, searchIsOpenOnLink, headerNameWithHeaderNav, headerName, searchIsOpenOnBar, switcherButton, switcherButtonOpen } from 'gatsby-theme-carbon/src/components/Header/Header.module.scss';

const Header = ({ children }) => {
  const {
    leftNavIsOpen,
    toggleNavState,
    switcherIsOpen,
    searchIsOpen,
    switcherTooltipText = '其他',
  } = useContext(NavContext);
  const { isSearchEnabled, navigationStyle, isSwitcherEnabled } = useMetadata();

  return (
    <ShellHeader
      aria-label="Header"
      className={cx(header, {
        [headerWithHeaderNav]: navigationStyle,
      })}>
      <SkipToContent href="#main-content" className={skipToContent} />
      <HeaderMenuButton
        className={cx('bx--header__action--menu', headerButton)}
        aria-label="打开菜单"
        onClick={() => {
          toggleNavState('leftNavIsOpen');
          toggleNavState('switcherIsOpen', 'close');
        }}
        isActive={leftNavIsOpen}
      />
      <Link
        className={cx(headerName, {
          [searchIsOpenOnLink]: searchIsOpen,
          [headerNameWithHeaderNav]: navigationStyle,
        })}
        to="/">
        {children}
      </Link>
      {navigationStyle && <HeaderNav />}
      <HeaderGlobalBar
        className={cx({ [searchIsOpenOnBar]: searchIsOpen })}>
        {isSearchEnabled && <GlobalSearch />}
        {isSwitcherEnabled && (
          <HeaderGlobalAction
            className={cx(headerButton, switcherButton, {
              [switcherButtonOpen]: switcherIsOpen,
            })}
            aria-label={switcherTooltipText}
            tooltipAlignment="end"
            onClick={() => {
              toggleNavState('switcherIsOpen');
              toggleNavState('searchIsOpen', 'close');
              toggleNavState('leftNavIsOpen', 'close');
            }}>
            {switcherIsOpen ? <Close20 /> : <Switcher20 />}
          </HeaderGlobalAction>
        )}
      </HeaderGlobalBar>
    </ShellHeader>
  );
};

const DefaultHeaderText = () => (
  <header>
    <span>
      邻萌社区服务中心
    </span>
  </header>

);

Header.defaultProps = {
  children: <DefaultHeaderText />,
};

export default Header;

// import React from 'react';
// import Header from 'gatsby-theme-carbon/src/components/Header';

// const CustomHeader = (props) => {

//   return(
//     <Header {...props}>
//       邻萌社区服务中心
//     </Header>
//   )
// };

// export default CustomHeader;