import React from 'react'
import {
  CustomizeThemePalette,
  CustomizeThemeSpacing,
  CustomizeThemeTypography,
  Stack
} from 'real-estate-ui'
import { useThemeContext } from '../Context/ThemeProvider'

export interface CustomizeThemeProps {}

export const CustomizeTheme: React.SFC<CustomizeThemeProps> = () => {
  const { customTheme } = useThemeContext()
  console.log('customTheme: ', customTheme)

  const [demoTheme, setDemoTheme] = React.useState(customTheme)

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

  const updateThemePalette = (newPaletteValues: any) => {
    setDemoTheme((demoTheme) => ({
      ...demoTheme,
      colors: {
        ...colors,
        ...newPaletteValues
      }
    }))
  }
  const updateThemeSpacing = (newSpacingValues: any) => {
    setDemoTheme((demoThemeValues: any) => ({
      ...demoThemeValues,
      space: {
        ...space,
        ...newSpacingValues
      }
    }))
  }
  const updateThemeTypography = (newThemeTypography: {
    fonts: object
    fontFaces: object
  }) => {
    console.log('newThemeTypography: ', newThemeTypography)
    // const { fonts: newFonts, fontFaces: newFontFaces } = newThemeTypography
    // const newTypography = {
    //   ...fonts,
    //   ...fontFaces,
    //   ...newFonts,
    //   ...newFontFaces
    // }
    // setDemoTheme((demoThemeValues: any) => ({
    //   ...demoThemeValues,
    //   ...newTypography
    // }))
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
