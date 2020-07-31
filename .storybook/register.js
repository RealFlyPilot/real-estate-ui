import * as React from 'react'
import addons, { makeDecorator } from '@storybook/addons'
import { createTheme, WuiProvider } from '@welcome-ui/core'

export const ThemeDecorator = makeDecorator({
  name: 'ThemeDecorator',
  wrapper: (getStory, context, { parameters }) => {
    const channel = addons.getChannel()
    channel.emit('my/customEvent', parameters)

    const theme = createTheme({
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
    })

    return (
      <WuiProvider theme={theme} hasGlobalStyle>
        {getStory(context)}
      </WuiProvider>
    )
  }
})
