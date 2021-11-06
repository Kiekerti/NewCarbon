import React from 'react';
import { HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import HomepageVideo from '../../components/HomepageVideo';
import { gray100 } from '@carbon/colors';

// Component to be shadowed

const FirstLeftText = () => (
  <p>
    决 策 → <em>行 动</em>
  </p>
);

const FirstRightText = () => (
  <p>
    建立纽带
    <br />
    这是邻萌社区服务中心工作任务之一，指导着我们的行动。
    帮助我们解决不同的社会问题和链接不同的资源，建立更好的对象体验及多向互动。
    <div style={{ paddingTop: "1.25rem" }}>↓</div>
  </p>
);

const customProps = {
  Banner: (
    <HomepageVideo
      src="videos/hero-video-ceshi.mp4"
      poster="images/meilicunxiao.png"
    />
  ),
  FirstCallout: (
    <HomepageCallout
      backgroundColor={gray100}
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: null,
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
