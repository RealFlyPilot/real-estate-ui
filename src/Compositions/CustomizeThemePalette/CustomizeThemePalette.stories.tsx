import * as React from 'react'
import { CustomizeThemePalette } from './CustomizeThemePalette'
import { baseTheme } from '../../Theme/base.theme'

export default { title: 'Compositions|CustomizeThemePalette' }

export const CustomizeThemePaletteFirstStory = () => {
  const { colors } = baseTheme
  const updateThemePalette = (newColors) => {
    console.log('newColors: ', newColors)
  }
  return (
    <CustomizeThemePalette
      colors={colors}
      updateThemePalette={updateThemePalette}
    />
  )
}
