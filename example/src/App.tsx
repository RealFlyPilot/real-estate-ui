import React from 'react'
import { RuiProvider } from 'real-estate-ui'
import { useThemeContext } from './Context/ThemeProvider'
import { Dashboard } from './Pages/Dashboard'

const App = () => {
  const { customTheme } = useThemeContext()

  return (
    <RuiProvider theme={customTheme}>
      <Dashboard />
    </RuiProvider>
  )
}

export default App
