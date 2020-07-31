import * as React from 'react'
import { BaseComponentStylePropType } from '../../types/base.types'
import { Breadcrumb as BaseBreadCrumb } from '@welcome-ui/breadcrumb'

export interface BreadcrumbProps extends BaseComponentStylePropType {
  separator?: any
}

const Breadcrumb: React.SFC<BreadcrumbProps> = (props) => {
  return <BaseBreadCrumb {...props} />
}

Breadcrumb.Item = BaseBreadCrumb.Item

export { Breadcrumb }
