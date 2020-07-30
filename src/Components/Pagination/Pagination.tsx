import * as React from 'react'

import { Pagination as BasePagination } from '@welcome-ui/pagination'

export interface PaginationProps {}

export const Pagination: React.SFC<PaginationProps> = (props) => {
  return <BasePagination {...props} />
}
