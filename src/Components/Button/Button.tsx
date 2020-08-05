import * as React from 'react'
import { T_BaseComponentStyleProps } from '../component.types'
import { Button as BaseButton } from '@welcome-ui/button'

export interface ButtonProps extends T_BaseComponentStyleProps {
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
