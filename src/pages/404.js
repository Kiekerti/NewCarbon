import React from 'react';
import { FourOhFour } from 'gatsby-theme-carbon';

const links = [
  { href: '/philosophy/pov', text: '机构视角' },
  { href: '/updates/whats-new', text: '最新动态' },
  { href: '/gallery', text: '相册' },
];

const Custom404 = () => <FourOhFour links={links} />;

export default Custom404;
