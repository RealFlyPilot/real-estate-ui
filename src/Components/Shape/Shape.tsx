import * as React from 'react'
import { BaseComponentStylePropType } from '../../types/base.types'
import { Shape as BaseShape } from '@welcome-ui/shape'

export interface ShapeProps extends BaseComponentStylePropType {
  children?: any
  height?: string | number
  shape?: 'square' | 'circle'
  width?: string | number
}

export const Shape: React.SFC<ShapeProps> = (props) => {
  return <BaseShape {...props} />
}
