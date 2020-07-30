import * as React from 'react'

import { Breadcrumb as BaseBreadcrumb } from '@welcome-ui/breadcrumb'

export interface BreadcrumbProps {}

export const Breadcrumb: React.SFC<BreadcrumbProps> = (props) => {
  return <BaseBreadcrumb {...props} />
}
