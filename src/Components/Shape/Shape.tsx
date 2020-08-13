import * as React from 'react'
import { T_BaseComponentStyleProps } from '../component.types'
import { Shape as BaseShape } from '@welcome-ui/shape'

export interface ShapeProps extends T_BaseComponentStyleProps {
  children?: any
  height?: string | number
  shape?: 'square' | 'circle'
  width?: string | number
  onClick?: Function
}

export const Shape: React.SFC<ShapeProps> = (props) => {
  return <BaseShape {...props} />
}
