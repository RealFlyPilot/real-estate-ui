import React from 'react'
import {
  ThemeProvider
  // Box,
  // Group,
  // Button,
  // Text,
  // Accordion
} from 'real-estate-ui'

// import { Dashboard } from './Components/Dashboard'
// import { Switch } from './Components'
import DashboardLayout from './Layouts/DashboardLayout'

const App = () => {
  const theme = {
    defaultFontFamily: 'Helvetica',
    headingFontFamily: 'Georgia'
  }
  return (
    <ThemeProvider theme={theme}>
      <DashboardLayout />
    </ThemeProvider>
  )
}

export default App
