import * as React from 'react'

import { Group as WelcomeGroup } from '@welcome-ui/group'

export interface GroupProps {
  children: any
  variant?: string
  size?: string
}

export const Group: React.SFC<GroupProps> = ({ children, variant, size }) => {
  return (
    <WelcomeGroup variant={variant} size={size}>
      {children}
    </WelcomeGroup>
  )
}
