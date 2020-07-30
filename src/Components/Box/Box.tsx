import * as React from 'react'

import { Box as BaseBox } from '@welcome-ui/box'

export interface BoxProps {
  display?: any
  width?: any
  height?: any
  justifyContent?: any
  alignItems?: any
  backgroundColor?: any
  children?: any
}

export const Box: React.SFC<BoxProps> = ({ children, ...rest }) => {
  return <BaseBox {...rest}>{children}</BaseBox>
}
