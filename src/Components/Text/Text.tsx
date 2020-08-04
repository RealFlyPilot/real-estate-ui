import * as React from 'react'
import { Text as BaseTextComponent } from '@welcome-ui/text'
import { BaseComponentStylePropType } from '../component.types'

export interface TextProps extends BaseComponentStylePropType {
  as?: any
  children?: any
  variant?: string
}

export const Text: React.SFC<TextProps> = ({
  variant,
  children,
  as,
  ...rest
}) => {
  return (
    <BaseTextComponent variant={variant} as={as} {...rest}>
      {children}
    </BaseTextComponent>
  )
}
