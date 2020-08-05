import * as React from 'react'
import { Text as BaseTextComponent } from '@welcome-ui/text'
import { T_BaseComponentStyleProps } from '../component.types'

export type T_TextVariants =
  | 'h0'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'body4'
  | 'subtitle1'
  | 'subtitle2'
  | 'meta1'
  | 'meta2'

export interface TextProps extends T_BaseComponentStyleProps {
  as?: any
  children?: any
  variant?: T_TextVariants
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
