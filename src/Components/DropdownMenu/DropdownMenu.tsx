import * as React from 'react'

import { DropdownMenu as BaseDropdownMenu } from '@welcome-ui/dropdown-menu'

export interface DropdownMenuProps {}

export const DropdownMenu: React.SFC<DropdownMenuProps> = (props) => {
  return <BaseDropdownMenu {...props} />
}
