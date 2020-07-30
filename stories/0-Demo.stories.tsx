import React from 'react'
import { ThemeProvider } from '../src/Theme/ThemeProvider'
import { Box } from '../src/Components/Box'
import { Text } from '../src/Components/Text'
import { Group } from '../src/Components/Group'
import { Button } from '../src/Components/Button'

const Demo = () => {
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

export default {
  title: 'Real Estate UI'
}

export const ToStorybook = () => <Demo />

ToStorybook.story = {
  name: 'Welcome demo'
}
