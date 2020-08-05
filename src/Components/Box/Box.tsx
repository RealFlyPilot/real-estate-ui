import * as React from 'react'
import { T_BaseComponentStyleProps } from '../component.types'
import { Box as BaseBox } from '@welcome-ui/box'

export interface BoxProps extends T_BaseComponentStyleProps {
  children?: any
}

export const Box: React.SFC<BoxProps> = ({ children, ...rest }) => {
  return <BaseBox {...rest}>{children}</BaseBox>
}
