import * as React from 'react'
import { CustomizeThemePalette } from '../CustomizeThemePalette/CustomizeThemePalette'
import { CustomizeThemeSpacing } from '../CustomizeThemeSpacing'
import { CustomizeThemeTypography } from '../CustomizeThemeTypography/CustomizeThemeTypography'
import { Stack } from '../../Components/Stack'

export interface CustomizeThemeProps {
  theme: any
}

export const CustomizeTheme: React.SFC<CustomizeThemeProps> = ({ theme }) => {
  const [customTheme, setCustomTheme] = React.useState(theme)

  const {
    space,
    colors,
    fonts,
    fontFaces,
    defaultLineHeight,
    defaultLetterSpacing,
    headingLineHeight,
    headingLetterSpacing,
    lineHeights,
    fontWeights,
    letterSpacings,
    fontSizes
  } = customTheme

  const typographyProps = {
    fonts,
    fontFaces,
    defaultLineHeight,
    defaultLetterSpacing,
    headingLineHeight,
    headingLetterSpacing,
    lineHeights,
    fontWeights,
    letterSpacings,
    fontSizes
  }

  const updateThemePalette = (newPalette) => {
    const newColors = {
      ...colors,
      ...newPalette // should overwrite old color values - right?
    }
    setCustomTheme((customTheme) => ({
      ...customTheme,
      colors: newColors
    }))
  }
  const updateThemeSpacing = (newSpacing) => {
    const newThemeSpacing = {
      ...space,
      ...newSpacing
    }
    setCustomTheme((customTheme) => ({
      ...customTheme,
      space: newThemeSpacing
    }))
  }
  const updateThemeTypography = (newThemeTypography: {
    fonts: object
    fontFaces: object
  }) => {
    const { fonts: newFonts, fontFaces: newFontFaces } = newThemeTypography
    const newTypography = {
      ...fonts,
      ...fontFaces,
      ...newFonts,
      ...newFontFaces
    }
    setCustomTheme((customTheme) => ({
      ...customTheme,
      ...newTypography
    }))
  }

  return (
    <Stack>
      <CustomizeThemePalette
        colors={colors}
        updateThemePalette={updateThemePalette}
      />
      <CustomizeThemeSpacing
        updateThemeSpacing={updateThemeSpacing}
        space={space}
      />
      <CustomizeThemeTypography
        {...typographyProps}
        updateThemeTypography={updateThemeTypography}
      />
    </Stack>
  )
}
