import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Row, Grid, Column } from "gatsby-theme-carbon/src/components/Grid";
import {
  footer,
  grid,
  nav,
  listItem,
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
  <svg width="144" height="144" viewBox="0 0 144 144" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="72" y="10" width="63" height="62" fill="#105BFB" />
    <path d="M90.0774 35.6748L95.1659 49.481L89.8413 54.6556V35.6748H90.0774Z" fill="#2BB35B" />
    <path d="M144 2L126.825 18.7008H114.329L107.588 37.398L101.666 43.1558L92.8524 18.7008H80.32V63.907L63.1449 80.6078V2H144Z" fill="#2BB35B" />
    <path d="M103.491 48.2149L101.666 43.1558L107.588 37.3979L103.691 48.2149H103.491Z" fill="#76D765" />
    <path d="M144 2V80.6131H63.1449V80.6078L80.32 63.907H89.8413V54.6556L95.1659 49.481L100.48 63.907H106.665L117.078 35.6748H117.309V63.907H126.825V18.7008L144 2Z" fill="#76D765" />
    <path d="M144 80.613V84.3955C144 91.9603 142.512 99.4509 139.621 106.44C136.731 113.429 132.494 119.779 127.152 125.128C121.811 130.477 115.47 134.72 108.491 137.615C101.512 140.51 94.0325 142 86.4787 142H0L63.1397 80.613H144Z" fill="#5AC662" />
    <path d="M63.1449 2V80.6131L0 142V59.6097C-6.34332e-08 44.3315 6.0601 29.6791 16.8473 18.8753C27.6345 8.07158 42.2652 2.00139 57.5213 2L63.1449 2Z" fill="#0DA34E" />
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
