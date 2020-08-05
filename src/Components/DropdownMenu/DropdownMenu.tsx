import * as React from 'react'
import {
  DropdownMenu as BaseDropdownMenu,
  useDropdownMenuState
} from '@welcome-ui/dropdown-menu'
import { T_BaseComponentStyleProps } from '../component.types'
export interface DropdownMenuProps extends T_BaseComponentStyleProps {
  children?: any
}

const DropdownMenu: React.SFC<DropdownMenuProps> = BaseDropdownMenu

export { DropdownMenu, useDropdownMenuState }
