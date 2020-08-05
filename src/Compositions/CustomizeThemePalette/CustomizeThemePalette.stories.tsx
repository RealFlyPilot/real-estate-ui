import * as React from 'react'
import { CustomizeThemePalette } from './CustomizeThemePalette'
import { baseTheme } from '../../Theme/base.theme'

export default { title: 'Compositions|CustomizeThemePalette' }

export const CustomizeThemePaletteFirstStory = () => {
  const { colors } = baseTheme
  return <CustomizeThemePalette colors={colors} />
}
