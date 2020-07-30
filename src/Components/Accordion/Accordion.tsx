import * as React from 'react'
import { Accordion as BaseAccordion } from '@welcome-ui/accordion'
import { Icons } from '../Icon'
import { BaseComponentStylePropType } from '../../types/base.types'

const { RightIcon } = Icons

export interface AccordionProps extends BaseComponentStylePropType {
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
