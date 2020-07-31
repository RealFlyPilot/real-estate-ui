import * as React from 'react'
import { BaseComponentStylePropType } from '../../types/base.types'
import { Avatar as BaseAvatar } from '@welcome-ui/avatar'

export interface AvatarProps extends BaseComponentStylePropType {
  src?: any
  name: any
  size?: any
}

export const Avatar: React.SFC<AvatarProps> = (props) => {
  return <BaseAvatar {...props} />
}
