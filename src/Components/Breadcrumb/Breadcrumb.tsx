import * as React from 'react'
import { T_BaseComponentStyleProps } from '../component.types'
import { Breadcrumb as BaseBreadCrumb } from '@welcome-ui/breadcrumb'

export interface BreadCrumbItemProps {
  separator?: any
  children?: any
  to?: string
}

const BreadCrumbItem: React.SFC<BreadCrumbItemProps> = (props) => (
  <BaseBreadCrumb.Item {...props} />
)

export interface BreadcrumbProps extends T_BaseComponentStyleProps {
  separator?: any
  children?: any
  gradientBackground?: string
  renderChildrenAs?: any
}
export interface BreadcrumbInterface extends React.SFC<BreadcrumbProps> {
  Item: React.SFC<BreadCrumbItemProps>
}

const Breadcrumb: BreadcrumbInterface = (props) => <BaseBreadCrumb {...props} />

Breadcrumb.Item = BreadCrumbItem

export { Breadcrumb }
