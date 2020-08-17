import * as React from 'react'
import { CustomizeThemePalette } from '../CustomizeThemePalette/CustomizeThemePalette'
import { CustomizeThemeSpacing } from '../CustomizeThemeSpacing'
import { CustomizeThemeTypography } from '../CustomizeThemeTypography/CustomizeThemeTypography'
import { Stack } from '../../Components/Stack'
import { Box } from '../../Components/Box'
import { Button } from '../../Components/Button'
import { ThemeTreeDisplay } from '../ThemeTreeDisplay/ThemeTreeDisplay'

console.log('Stack: ', Stack)
console.log('Box: ', Box)

export interface CustomizeThemeProps {
  theme: any
  updateTheme: Function
}

export const CustomizeTheme: React.SFC<CustomizeThemeProps> = ({
  theme,
  updateTheme
}) => {
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

  React.useEffect(() => {
    updateTheme(customTheme)
  }, [customTheme])

  return (
    <Box width={1}>
      <Stack direction='row' spacing='xl' width={1}>
        <Box minWidth={800}>
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
        </Box>
        <Box minWidth={300} p={16} ml='auto'>
          <ThemeTreeDisplay customTheme={customTheme} />
        </Box>
      </Stack>
    </Box>
  )
}
