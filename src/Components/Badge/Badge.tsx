import * as React from 'react'
import { Badge as BaseBadge } from '@welcome-ui/badge'
import { T_NumericVariant, T_BaseComponentStyleProps } from '../component.types'

export interface BadgeProps extends T_BaseComponentStyleProps {
  variant?: T_NumericVariant
}

export const Badge: React.SFC<BadgeProps> = (props) => {
  return <BaseBadge {...props} />
}
