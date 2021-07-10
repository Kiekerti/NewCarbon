import React from 'react';
import Switcher from 'gatsby-theme-carbon/src/components/Switcher';
import { SwitcherLink } from 'gatsby-theme-carbon/src/components/Switcher'; // add brackets
import { SwitcherDivider } from 'gatsby-theme-carbon/src/components/Switcher'; // add brackets

const CustomSwitcher = (props) => {
  return (
    <Switcher {...props}>
      <SwitcherDivider>基石</SwitcherDivider>
      <SwitcherLink href="https://ibm.com/brand" isInternal>
        第一個鏈接
      </SwitcherLink>
      <SwitcherLink href="https://ibm.com/design/language">
        第二个连接
      </SwitcherLink>
      <SwitcherDivider>Implementation</SwitcherDivider>
      <SwitcherLink href="https://www.carbondesignsystem.com/">
        有点忧伤啊
      </SwitcherLink>
      <SwitcherLink href="https://www.ibm.com/standards/web/carbon-for-ibm-dotcom/">
        Carbon for IBM.com
      </SwitcherLink>
      <SwitcherLink href="https://www.ibm.com/design/event/">
        IBM Event Design
      </SwitcherLink>
      <SwitcherLink href="https://www.ibm.com/design/workplace/">
        IBM Workplace Design
      </SwitcherLink>
      <SwitcherDivider>Practices</SwitcherDivider>
      <SwitcherLink href="https://www.ibm.com/design/thinking/">
        Enterprise Design Thinking
      </SwitcherLink>
      <SwitcherLink href="https://www.ibm.com/able/">
        IBM Accessibility
      </SwitcherLink>
      <SwitcherLink href="https://www.ibm.com/design/ai">
        IBM Design for AI
      </SwitcherLink>
      <SwitcherLink href="https://www.ibm.com/design/research/">
        IBM Design Research
      </SwitcherLink>
      <SwitcherLink href="https://www.ibm.com/services/ibmix/">
        IBM iX
      </SwitcherLink>
      <SwitcherLink
        isInternal
        href="https://w3.ibm.com/design/universal-experiences/">
        IBM Universal Experiences
      </SwitcherLink>
      <SwitcherDivider>Community</SwitcherDivider>
      <SwitcherLink href="https://w3.ibm.com/design/" isInternal>
        IBM Design
      </SwitcherLink>
      <SwitcherLink href="https://www.ibm.com/design/racial-equity-in-design">
        Racial Equity in Design
      </SwitcherLink>
    </Switcher>
  )
}


export default CustomSwitcher;
