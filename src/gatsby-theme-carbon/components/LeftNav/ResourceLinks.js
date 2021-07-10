import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: '微博',
    href: 'https://weibo.com/menggongyi?nick=%E9%82%BB%E8%90%8C%E7%A4%BE%E5%8C%BA%E6%9C%8D%E5%8A%A1%E4%B8%AD%E5%BF%83&is_all=1',
  },
  {
    title: '语雀社区',
    href: 'https://www.yuque.com/linmengshequ',
  },
];

const CustomResources = () => (
  <ResourceLinks includeDividerSpace={true} shouldOpenNewTabs links={links} />
);

export default CustomResources;
