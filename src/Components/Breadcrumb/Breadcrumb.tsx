import * as React from 'react'
import { BaseComponentStylePropType } from '../component.types'
import { Breadcrumb as BaseBreadCrumb } from '@welcome-ui/breadcrumb'

export interface BreadcrumbProps extends BaseComponentStylePropType {
  separator?: any
}

const Breadcrumb: React.SFC<BreadcrumbProps> = (props) => {
  return <BaseBreadCrumb {...props} />
}
// @ts-ignore
Breadcrumb.Item = BaseBreadCrumb.Item

export { Breadcrumb }
