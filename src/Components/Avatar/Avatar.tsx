import * as React from 'react'
import {
  T_BaseComponentStyleProps,
  T_Shapes,
  T_Sizes
} from '../component.types'
import { Avatar as BaseAvatar } from '@welcome-ui/avatar'

export interface AvatarProps extends T_BaseComponentStyleProps {
  color?: string
  fontSize?: string | number
  height?: number
  name?: string
  shape?: T_Shapes
  size?: T_Sizes
  src?: string
  width?: number
}

export const Avatar: React.SFC<AvatarProps> = (props) => {
  return <BaseAvatar {...props} />
}
