import * as React from 'react'

import { Accordion as WelcomeAccordion } from '@welcome-ui/accordion'

export interface AccordionProps {
  title?: any
  children?: any
  visible?: boolean
  icon?: any
}

export const Accordion: React.SFC<AccordionProps> = ({
  title,
  children,
  ...rest
}) => {
  return (
    <WelcomeAccordion title={title} {...rest}>
      {children}
    </WelcomeAccordion>
  )
}
