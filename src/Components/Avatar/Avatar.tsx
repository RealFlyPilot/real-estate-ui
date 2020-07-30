import * as React from 'react'

import { Avatar as BaseAvatar } from '@welcome-ui/avatar'

export interface AvatarProps {
  src?: any
  name?: any
  width?: any
  height?: any
  color?: any
  fontSize?: any
  mr?: any
  mt?: any
  ml?: any
  mb?: any
}

export const Avatar: React.SFC<AvatarProps> = (props) => {
  return <BaseAvatar {...props} />
}
