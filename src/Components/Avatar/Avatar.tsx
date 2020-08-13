import * as React from 'react'
import { T_BaseComponentStyleProps } from '../component.types'
import { Avatar as BaseAvatar } from '@welcome-ui/avatar'

export interface AvatarProps extends T_BaseComponentStyleProps {
  src?: any
  name: any
  size?: any
}

export const Avatar: React.SFC<AvatarProps> = (props) => {
  return <BaseAvatar {...props} />
}
