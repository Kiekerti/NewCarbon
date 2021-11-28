import React from 'react';
import { Link } from 'gatsby';
import Layout from 'gatsby-theme-carbon/src/components/Layout';
import {
  container,
  fourOhFour,
  paragraph,
  heading,
  link,
  list,
} from 'gatsby-theme-carbon/src/components/FourOhFour/FourOhFour.module.scss';


const Custom404 = ({ links }) => (
  <Layout homepage>
    <div className={container}>
      <h2 className={heading}>出了点小问题</h2>
      <p className={paragraph}>
        对不起，没有找到你想要的内容。
        {links && ' 也许你对这些感兴趣？'}
      </p>
      {links && (
        <ul className={list}>
          {links.map(({ href, text }, i) => (
            <li key={i}>
              <Link className={link} to={href}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <span className={fourOhFour}>404</span>
    </div>
  </Layout>
);

export default Custom404;
