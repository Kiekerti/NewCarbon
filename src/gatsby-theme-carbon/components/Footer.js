import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Row, Grid, Column } from "gatsby-theme-carbon/src/components/Grid";
import {
  footer,
  grid,
  nav,
  listItem,
  logo,
  content,
} from "gatsby-theme-carbon/src/components/Footer/Footer.module.scss";

const Footer = ({ Content, links, Logo }) => {
  const { firstCol, secondCol } = links;
  const { site } = useStaticQuery(graphql`
    query BUILD_TIME_QUERY_SHADOWED {
      site {
        buildTime(formatString: "YYYY年MM月DD日")
      }
    }
  `);
  return (
    <footer className={footer}>
      <Grid className={grid}>
        <Row>
          <Column colLg={2} colMd={2}>
            <ul className={nav}>
              {firstCol &&
                firstCol.map((link, i) => (
                  <li key={i} className={listItem}>
                    <a href={link.href} aria-label={link.linkText}>
                      {link.linkText}
                    </a>
                  </li>
                ))}
              <li data-autoid="dds--privacy-cp" className={listItem} />
            </ul>
          </Column>
          <Column colLg={2} colMd={2}>
            <ul className={nav}>
              {secondCol &&
                secondCol.map((link, i) => (
                  <li key={i} className={listItem}>
                    <a href={link.href} aria-label={link.linkText}>
                      {link.linkText}
                    </a>
                  </li>
                ))}
            </ul>
          </Column>
          <Column
            className={content}
            colLg={4}
            colMd={4}
            colSm={3}
            offsetLg={2}
          >
            <Content buildTime={site.buildTime} />
          </Column>
        </Row>
        <Row>
          <Column colLg={3}>
            <Logo />
          </Column>
        </Row>
      </Grid>
    </footer>
  );
};

const Neomon = () => (
  <svg width="144" height="140" viewBox="0 0 144 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_1056_7399)">
      <rect x="72" y="8" width="63" height="62" fill="#105BFB" />
      <path d="M90.0774 33.6748L95.1659 47.481L89.8413 52.6556V33.6748H90.0774Z" fill="#2BB35B" />
      <path d="M144 0L126.825 16.7008H114.329L107.588 35.398L101.666 41.1558L92.8524 16.7008H80.32V61.907L63.1449 78.6078V0H144Z" fill="#2BB35B" />
      <path d="M103.491 46.2149L101.666 41.1558L107.588 35.3979L103.691 46.2149H103.491Z" fill="#76D765" />
      <path d="M144 0V78.6131H63.1449V78.6078L80.32 61.907H89.8413V52.6556L95.1659 47.481L100.48 61.907H106.665L117.078 33.6748H117.309V61.907H126.825V16.7008L144 0Z" fill="#76D765" />
      <path d="M144 78.613V82.3955C144 89.9603 142.512 97.4509 139.621 104.44C136.731 111.429 132.494 117.779 127.152 123.128C121.811 128.477 115.47 132.72 108.491 135.615C101.512 138.51 94.0325 140 86.4787 140H0L63.1397 78.613H144Z" fill="#5AC662" />
      <path d="M63.1449 0V78.6131L0 140V57.6097C-6.34332e-08 42.3315 6.0601 27.6791 16.8473 16.8753C27.6345 6.07158 42.2652 0.00139323 57.5213 0L63.1449 0Z" fill="#0DA34E" />
    </g>
    <defs>
      <clipPath id="clip0_1056_7399">
        <rect width="144" height="140" fill="white" />
      </clipPath>
    </defs>
  </svg>


);

const DefaultContent = () => (
  <p>
    Shadow this content by importing the theme Footer and supplying your own
    props.
  </p>
);

Footer.defaultProps = {
  links: {
    firstCol: [
      { href: "https://www.ibm.com/design", linkText: "Sample" },
      { href: "https://www.ibm.com/design", linkText: "Links" },
      {
        href: "https://www.ibm.com/design",
        linkText: "Column",
      },
      { href: "https://www.ibm.com/design", linkText: "One" },
    ],
    secondCol: [
      {
        href: "https://www.ibm.com/design",
        linkText: "Dribbble",
      },
      {
        href: "https://www.ibm.com/design",
        linkText: "Medium",
      },
      {
        href: "https://www.ibm.com/design",
        linkText: "Twitter",
      },
    ],
  },
  Content: DefaultContent,
  Logo: Neomon,
};

Footer.propTypes = {
  /**
   * Specify the first and second columns of your links
   */
  links: PropTypes.exact({
    firstCol: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string,
        linkText: PropTypes.string,
      })
    ),
    secondCol: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string,
        linkText: PropTypes.string,
      })
    ),
  }),

  /**
   * Specify the first and second columns of your links
   */
  Content: PropTypes.elementType,

  /**
   * Provide a logo to be rendered in the bottom left corner
   */
  Logo: PropTypes.elementType,
};

const currentYear = new Date().getFullYear();

const Content = ({ buildTime }) => {
  return (
    <>
      <p>
        有疑问？发送
        <a
          href="mailto:sample@gmail.com"
          onClick={() => {
            console.log("%c\ud83e\udd2b 加入我们，一起让世界更美好。 \ud83c\udf6d", "background: #0f62fe; color: #D4EBFF; padding: 10px 16px")
          }}>邮件
        </a>咨询
      </p>
      <p>
        上次更新于{buildTime}
        <br />
        Copyright © {currentYear} 泸州市龙马潭区邻萌社区服务中心
      </p>
    </>
  )
}



const links = {
  firstCol: [
    {
      href: '/',
      linkText: '回到首页',
    },
    {
      href: '/philosophy/pov',
      linkText: '关于我们',
    },
  ],
  secondCol: [
    {
      href: 'https://weibo.com/menggongyi?nick=%E9%82%BB%E8%90%8C%E7%A4%BE%E5%8C%BA%E6%9C%8D%E5%8A%A1%E4%B8%AD%E5%BF%83&is_all=1',
      linkText: '↗ 微博',
    },
    {
      href: 'https://www.yuque.com/linmengshequ',
      linkText: '↗ 语雀社区',
    },
    { href: 'https://www.instagram.com/ibm/?hl=en', linkText: '↗ Instagram' },
  ],
};

const CustomFooter = props => (
  <Footer {...props} links={links} Content={Content} />
);

export default CustomFooter;
