import * as React from 'react'
import {
  DropdownMenu as BaseDropdownMenu,
  useDropdownMenuState
} from '@welcome-ui/dropdown-menu'
import { BaseComponentStylePropType } from '../component.types'
export interface DropdownMenuProps extends BaseComponentStylePropType {
  children?: any
}

const DropdownMenu: React.SFC<DropdownMenuProps> = BaseDropdownMenu

export { DropdownMenu, useDropdownMenuState }
