import React from 'react'
import { ThemeProvider, baseTheme } from 'real-estate-ui'

import DashboardLayout from './Layouts/DashboardLayout'
import { EditableThemeContextProvider } from './EditableThemeContext'

const App = () => {
  return (
    <EditableThemeContextProvider baseTheme={baseTheme}>
      <ThemeProvider theme={baseTheme}>
        <DashboardLayout />
      </ThemeProvider>
    </EditableThemeContextProvider>
  )
}

export default App
