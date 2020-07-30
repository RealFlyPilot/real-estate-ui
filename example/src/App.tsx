import React from 'react'
import { ThemeProvider, Box, Group, Button, Text } from 'real-estate-ui'

const App = () => {
  const theme = {
    defaultFontFamily: 'Helvetica',
    headingFontFamily: 'Georgia',
    colors: {
      primary: {
        500: '#FF0000'
      },
      secondary: {
        500: '#00FF00'
      }
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <Box alignItems='center'>
        <Text variant='h1'>
          This is the initial and official Real Estate UI Library Demo
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
        <hr />
        <Group variant='tertiary' size='xs'>
          <Button>First</Button>
          <Button variant='secondary'>Second</Button>
          <Button variant='tertiary'>Third</Button>
          <Button variant='tertiary'>Last</Button>
        </Group>
      </Box>
    </ThemeProvider>
  )
}

export default App