import * as React from 'react'
import { T_BaseComponentStyleProps } from '../component.types'
// import { Box as BaseBox } from './Box.styles'
import { Box as BaseBox } from '@welcome-ui/box'
console.log('BaseBox: ', BaseBox)

export interface BoxProps extends T_BaseComponentStyleProps {
  children?: any
}

export const Box: React.SFC<BoxProps> = (props) => {
  return <BaseBox {...props} />
}
