import * as React from 'react'
import { Accordion as BaseAccordion } from '@welcome-ui/accordion'
import { T_BaseComponentStyleProps } from '../component.types'
import { icons } from '../Icon/Icon'
const { RightIcon } = icons

export interface AccordionProps extends T_BaseComponentStyleProps {
  title?: any
  children?: any
  visible?: boolean
  icon?: any
}

export const Accordion: React.SFC<AccordionProps> = ({
  title,
  children,
  icon = <RightIcon size='sm' />,
  ...rest
}) => {
  return (
    <BaseAccordion title={title} {...rest}>
      {children}
    </BaseAccordion>
  )
}
