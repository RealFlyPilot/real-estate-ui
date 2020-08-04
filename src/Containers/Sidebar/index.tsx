import React from 'react'
import { Box } from '../../Components/Box'

export interface SidebarProps {
  children?: any
}

export const Sidebar: React.SFC<SidebarProps> = ({ children }) => {
  return <Box padding='18px'>{children}</Box>
}
