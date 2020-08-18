import * as React from 'react'
import {
  DropdownMenu as BaseDropdownMenu,
  useDropdownMenuState
} from '@welcome-ui/dropdown-menu'
import { T_BaseComponentStyleProps } from '../component.types'

export interface DropdownMenuProps extends T_BaseComponentStyleProps {
  children?: any
  innerProps?: object
  visible?: boolean
}

export interface DropdownMenuInterface extends React.SFC<DropdownMenuProps> {
  Item: React.SFC<DropdownMenuProps>
  Trigger: React.SFC<DropdownMenuProps>
}

const DropdownMenu: DropdownMenuInterface = (props) => (
  <BaseDropdownMenu {...props} />
)

DropdownMenu.Item = BaseDropdownMenu.Item
DropdownMenu.Trigger = BaseDropdownMenu.Trigger

export { DropdownMenu, useDropdownMenuState }
