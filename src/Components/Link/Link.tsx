import * as React from 'react'

import { Link as BaseLink } from '@welcome-ui/link'

export interface LinkProps {
  href?: string
  as?: any
  variant?: 'primary' | 'secondary'
  disabled?: boolean
  to?: any
  children?: any
}

export const Link: React.SFC<LinkProps> = (props) => {
  return <BaseLink {...props} />
}
