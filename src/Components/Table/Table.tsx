import * as React from 'react'
import { T_BaseComponentStyleProps, T_StatusVariant } from '../component.types'
import { Table as BaseTable } from '@welcome-ui/table'

export interface TableRowProps extends T_BaseComponentStyleProps {
  variant?: T_StatusVariant
  children?: any
}

const TableRow: React.SFC<TableRowProps> = (props) => (
  <BaseTable.Tr {...props} />
)

export interface TableProps extends T_BaseComponentStyleProps {
  indent?: boolean
  children?: any
}

export interface TableInterface extends React.SFC<TableProps> {
  Thead: React.SFC<TableProps>
  Tbody: React.SFC<TableProps>
  Tr: React.SFC<TableRowProps>
  Th: React.SFC<TableProps>
  Td: React.SFC<TableProps>
}

const Table: TableInterface = (props) => {
  return <BaseTable {...props} />
}

Table.Thead = BaseTable.Thead
Table.Tbody = BaseTable.Tbody
Table.Tr = TableRow
Table.Th = BaseTable.Th
Table.Td = BaseTable.Td

export { Table }
