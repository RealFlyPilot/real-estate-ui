import * as React from 'react'
import {
  T_BaseComponentStyleProps,
  T_NumericVariant,
  T_Sizes,
  T_Shapes
} from '../component.types'
import { Button as BaseButton } from '@welcome-ui/button'

export interface ButtonProps extends T_BaseComponentStyleProps {
  variant?: T_NumericVariant
  children?: any
  onClick?: Function
  disabled?: boolean
  type?: string
  shape?: T_Shapes
  size?: T_Sizes
  // as="a" href="https://www.welcometothejungle.co" target="_blank" rel="noopener nofollow"
  as?: string
  href?: string
  target?: string
  rel?: string
}

export const Button: React.SFC<ButtonProps> = ({
  variant,
  children,
  ...rest
}) => {
  return (
    <BaseButton variant={variant} {...rest}>
      {children}
    </BaseButton>
  )
}
