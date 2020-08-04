import React from 'react'
import { Box } from 'real-estate-ui'
import { nav } from '../nav-lists'
import { StyleGuidePreview } from '../Components/StyleGuidePreview'
import { SidebarNav } from '../Components/SidebarNav/SidebarNav'

export interface DashboardLayoutProps {}

const DashboardLayout: React.SFC<DashboardLayoutProps> = () => {
  return (
    <div>
      <Box display='flex' height='100%'>
        <Box width={'25%'} padding='16px'>
          <SidebarNav links={nav} />
        </Box>
        <Box
          width={'75%'}
          backgroundColor='light.900'
          borderRadius='sm'
          padding='16px'
          boxShadow='sm'
        >
          <StyleGuidePreview />
        </Box>
      </Box>
    </div>
  )
}

export default DashboardLayout
