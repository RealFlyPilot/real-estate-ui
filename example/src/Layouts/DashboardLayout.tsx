import React from 'react'
import { Box, Code } from 'real-estate-ui'
import { nav } from '../nav-lists'
import { StyleGuidePreview } from '../Components/StyleGuidePreview'
import { SidebarNav } from '../Components/SidebarNav/SidebarNav'
import { EditableThemeContext } from '../EditableThemeContext'

export interface DashboardLayoutProps {}

const DashboardLayout: React.SFC<DashboardLayoutProps> = () => {
  const { appTheme } = React.useContext(EditableThemeContext)
  const currentThemeLiteral = Object.keys(appTheme).length > 0 && (
    <Code language='json'>{JSON.stringify(appTheme)}</Code>
  )
  return (
    <div>
      <Box display='flex' height='100%'>
        <Box width={'25%'} padding='16px'>
          <SidebarNav links={nav} />
        </Box>
        {/* <Box width={'25%'} padding='16px'>
          <div data-testid='values'>{currentThemeLiteral}</div>
        </Box> */}

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
