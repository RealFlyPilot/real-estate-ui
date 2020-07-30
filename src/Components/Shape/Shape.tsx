import * as React from 'react'

import { Shape as BaseShape } from '@welcome-ui/shape'

export interface ShapeProps {}

export const Shape: React.SFC<ShapeProps> = (props) => {
  return <BaseShape {...props} />
}
