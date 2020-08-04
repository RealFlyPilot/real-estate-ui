import * as React from 'react'
import addons, { makeDecorator } from '@storybook/addons'
import { createTheme, WuiProvider } from '@welcome-ui/core'
import { welcomeTheme } from '../src/Theme/welcome.theme'
import { baseTheme } from '../src/Theme/base.theme'

export const ThemeDecorator = makeDecorator({
  name: 'ThemeDecorator',
  wrapper: (getStory, context, { parameters }) => {
    const channel = addons.getChannel()
    channel.emit('my/customEvent', parameters)

    const theme = createTheme(welcomeTheme)

    return (
      <WuiProvider theme={theme} hasGlobalStyle>
        {getStory(context)}
      </WuiProvider>
    )
  }
})
