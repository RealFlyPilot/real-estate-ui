import * as React from 'react'

import { Link as BaseLink } from '@welcome-ui/link'

export interface LinkProps {}

export const Link: React.SFC<LinkProps> = (props) => {
  return <BaseLink {...props} />
}
