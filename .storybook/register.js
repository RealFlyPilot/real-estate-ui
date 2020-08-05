import * as React from 'react'
import { addons, makeDecorator } from '@storybook/addons'
import { createTheme, WuiProvider } from '@welcome-ui/core'
import { welcomeTheme } from '../src/Theme/welcome.theme'

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

// const ADDON_ID = 'themeAddon'
// const PARAM_KEY = 'themeAddon'
// const PANEL_ID = `${ADDON_ID}/panel`

// const ThemePanel = () => {
//   const theme = createTheme(welcomeTheme)
//   const value = useParameter(PARAM_KEY, null)
//   console.log('value: ', value)
//   const themeString = JSON.stringify(theme)
//   console.log('themeString: ', themeString)
//   return <div>{themeString}</div>
// }

// addons.register(ADDON_ID, (api) => {
//   const render = ({ active, key }) => (
//     <AddonPanel active={active} key={key}>
//       <ThemePanel />
//     </AddonPanel>
//   )
//   const title = 'Current Theme'

//   addons.add(PANEL_ID, {
//     type: types.PANEL,
//     title,
//     render,
//     paramKey: PARAM_KEY
//   })
// })
