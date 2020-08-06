import * as React from 'react'
import { addons, makeDecorator } from '@storybook/addons'
import { createTheme, WuiProvider } from '@welcome-ui/core'
import { welcomeTheme } from '../src/Theme/welcome.theme'
import { ToastProvider } from '../src/index'

export const ThemeDecorator = makeDecorator({
  name: 'ThemeDecorator',
  wrapper: (getStory, context, { parameters }) => {
    console.log('parameters: ', parameters)

    const channel = addons.getChannel()
    channel.emit('my/customEvent', parameters)

    const baseTheme = createTheme(welcomeTheme)
    const [theme, setTheme] = React.useState(baseTheme)

    const updateTheme = (newTheme) => {
      console.log('updating new theme in storybook', newTheme)
      setTheme((theme) => ({
        ...theme,
        ...newTheme
      }))
    }

    context.theme = theme
    context.updateTheme = updateTheme

    return (
      <WuiProvider theme={theme} hasGlobalStyle>
        {getStory(context)}
      </WuiProvider>
    )
  }
})

export const ToastDecorator = makeDecorator({
  name: 'ToastDecorator',
  wrapper: (getStory, context, { parameters }) => {
    const channel = addons.getChannel()
    channel.emit('my/customEvent', parameters)

    return <ToastProvider>{getStory(context)}</ToastProvider>
  }
})
