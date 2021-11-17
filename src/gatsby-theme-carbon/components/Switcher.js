import React from 'react';
import Switcher from 'gatsby-theme-carbon/src/components/Switcher';
import { SwitcherLink } from 'gatsby-theme-carbon/src/components/Switcher'; // add brackets
import { SwitcherDivider } from 'gatsby-theme-carbon/src/components/Switcher'; // add brackets

const CustomSwitcher = (props) => {
  return (
    <Switcher {...props}>
      <SwitcherDivider>社交媒体</SwitcherDivider>
      <SwitcherLink href="https://www.yuque.com/linmengshequ" isInternal>
        语雀
      </SwitcherLink>
      <SwitcherLink href="https://weibo.com/menggongyi?nick=%E9%82%BB%E8%90%8C%E7%A4%BE%E5%8C%BA%E6%9C%8D%E5%8A%A1%E4%B8%AD%E5%BF%83&is_all=1">
        微博
      </SwitcherLink>
      <SwitcherDivider>友好机构</SwitcherDivider>
      <SwitcherLink href="http://www.lzsxysg.com/">
        泸州市心源社会工作服务中心
      </SwitcherLink>
      <SwitcherLink href="http://www.cdayx.com/">
        成都市爱有戏社区发展中心
      </SwitcherLink>
    </Switcher>
  )
}


export default CustomSwitcher;
