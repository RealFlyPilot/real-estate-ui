import * as React from 'react'
import { SideBarElement } from './Sidebar.styles'
import { T_BaseComponentStyleProps } from '../../../Components/component.types'

export interface SidebarProps extends T_BaseComponentStyleProps {
  children: any
  style?: object
  width?: string
}

export const Sidebar: React.SFC<SidebarProps> = ({
  children,
  style,
  width = '30%',
  ...rest
}) => {
  return (
    <SideBarElement width={width} style={style} {...rest}>
      {children}
    </SideBarElement>
  )
}
