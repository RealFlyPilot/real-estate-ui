import * as React from 'react'
import { Sidebar } from './Sidebar'
import { Main } from './Main'
import { T_BaseComponentStyleProps } from '../../Components/component.types'
import { Box } from '../../Components/Box'

export interface SidebarLayoutProps extends T_BaseComponentStyleProps {
  children?: any
}

export interface SidebarLayoutInterface extends React.SFC<SidebarLayoutProps> {
  Sidebar: React.SFC<SidebarLayoutProps>
  Main: React.SFC<SidebarLayoutProps>
}

export const SidebarLayout: SidebarLayoutInterface = ({
  children,
  ...rest
}) => {
  return (
    <Box display='flex' {...rest}>
      {children}
    </Box>
  )
}

SidebarLayout.Sidebar = Sidebar
SidebarLayout.Main = Main
