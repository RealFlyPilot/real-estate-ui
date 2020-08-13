import React from 'react'
import { RuiProvider } from 'real-estate-ui'
import { useThemeContext } from './Context/ThemeProvider'
import DashboardLayout from './Layouts/DashboardLayout'

const App = () => {
  const { customTheme } = useThemeContext()

  return (
    <RuiProvider theme={customTheme}>
      <DashboardLayout />
    </RuiProvider>
  )
}

export default App
