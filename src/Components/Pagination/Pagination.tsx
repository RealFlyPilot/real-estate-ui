import * as React from 'react'
import { BaseComponentStylePropType } from '../component.types'
import { Pagination as BasePagination } from '@welcome-ui/pagination'

export interface PaginationProps extends BaseComponentStylePropType {
  'aria-label'?: string
  children?: any
  getHref?: Function
  leftArrow?: Node
  onChange?: Function
  page?: number
  pageCount?: number
  rangeDisplay?: number
  rightArrow?: Node
}

export const Pagination: React.SFC<PaginationProps> = (props) => {
  return <BasePagination {...props} />
}
