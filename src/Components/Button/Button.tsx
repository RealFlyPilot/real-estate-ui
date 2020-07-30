import * as React from 'react'

import { Button as WelcomeButton } from '@welcome-ui/button'

export interface ButtonProps {
  variant?: string
  children?: any
}

export const Button: React.SFC<ButtonProps> = ({
  variant,
  children,
  ...rest
}) => {
  return (
    <WelcomeButton variant={variant} {...rest}>
      {children}
    </WelcomeButton>
  )
}
