import * as React from 'react'
import { BaseComponentStylePropType } from '../component.types'
import { Table as BaseTable } from '@welcome-ui/table'

export interface TableProps extends BaseComponentStylePropType {}

export const Table: React.SFC<TableProps> = (props) => {
  return <BaseTable {...props} />
}

// @ts-ignore
Table.Thead = BaseTable.Thead
// @ts-ignore
Table.Tbody = BaseTable.Tbody
// @ts-ignore
Table.Tr = BaseTable.Tr
// @ts-ignore
Table.Th = BaseTable.Th
// @ts-ignore
Table.Td = BaseTable.Td
