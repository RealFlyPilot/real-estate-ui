import * as React from 'react'
import { BaseComponentStylePropType } from '../../types/base.types'
import { Box as BaseBox } from '@welcome-ui/box'

export interface BoxProps extends BaseComponentStylePropType {
  children?: any
}

export const Box: React.SFC<BoxProps> = ({ children, ...rest }) => {
  return <BaseBox {...rest}>{children}</BaseBox>
}
