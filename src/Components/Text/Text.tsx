import * as React from 'react'
import { Text as BaseTextComponent } from '@welcome-ui/text'

export interface TextProps {
  as?: any
  children?: any
  variant?: string
}

export const Text: React.SFC<TextProps> = ({ variant, children, as }) => {
  return (
    <BaseTextComponent variant={variant} as={as}>
      {children}
    </BaseTextComponent>
  )
}
