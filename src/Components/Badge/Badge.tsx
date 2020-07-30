import * as React from 'react'

import { Badge as BaseBadge } from '@welcome-ui/badge'

export interface BadgeProps {}

export const Badge: React.SFC<BadgeProps> = (props) => {
  return <BaseBadge {...props} />
}
