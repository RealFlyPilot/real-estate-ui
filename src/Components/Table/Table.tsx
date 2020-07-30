import * as React from 'react'

import { Table as BaseTable } from '@welcome-ui/table'

export interface TableProps {}

export const Table: React.SFC<TableProps> = (props) => {
  return <BaseTable {...props} />
}
