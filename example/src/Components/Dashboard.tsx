import * as React from 'react'
import { Box } from 'real-estate-ui'

export interface SidebarProps {
  children?: any
}

const Sidebar: React.SFC<SidebarProps> = ({ children }) => {
  return <Box padding='18px'>{children}</Box>
}

export interface DashboardProps {}

export const Dashboard: React.SFC<DashboardProps> = () => {
  return (
    <Box display='flex' justifyContent='flex-start' alignItems='center'>
      <Sidebar>Side Bar</Sidebar>
    </Box>
  )
}
