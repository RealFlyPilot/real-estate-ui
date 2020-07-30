import * as React from 'react'

import { Group as BaseGroup } from '@welcome-ui/group'

export interface GroupProps {
  children: any
  variant?: string
  size?: string
}

export const Group: React.SFC<GroupProps> = ({ children, variant, size }) => {
  return (
    <BaseGroup variant={variant} size={size}>
      {children}
    </BaseGroup>
  )
}
