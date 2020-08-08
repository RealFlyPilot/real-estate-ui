import * as React from 'react'
import { CustomizeTheme } from './CustomizeTheme'

export default { title: 'Compositions|CustomizeTheme' }

export const CustomizeThemeFirstStory = (storyProps) => {
  const { updateTheme, theme } = storyProps
  // const [customTheme, updateCustomTheme] = React.useState(theme)
  const handleThemeUpdate = (newTheme) => {
    updateTheme(newTheme)
  }
  return <CustomizeTheme theme={theme} updateTheme={handleThemeUpdate} />
}
