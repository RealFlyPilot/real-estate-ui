import * as React from 'react'
import { BaseComponentStylePropType } from '../component.types'
import { Button as BaseButton } from '@welcome-ui/button'

export interface ButtonProps extends BaseComponentStylePropType {
  variant?: string
  children?: any
  onClick?: Function
  type?: string
  shape?: string
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
