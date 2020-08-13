import * as React from 'react'
import { CustomizeThemeSpacing } from './CustomizeThemeSpacing'
import { baseTheme } from '../../Theme/base.theme'

export default { title: 'Compositions|CustomizeThemeSpacing' }

export const CustomizeThemeSpacingFirstStory = () => {
  const { space } = baseTheme
  const updateThemeSpacing = (newSpacingTheme) => {
    console.log('newSpacingTheme: ', newSpacingTheme)
  }
  return (
    <CustomizeThemeSpacing
      updateThemeSpacing={updateThemeSpacing}
      space={space}
    />
  )
}
