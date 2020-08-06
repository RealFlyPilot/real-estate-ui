import * as React from 'react'
import { CustomizeThemeTypography } from './CustomizeThemeTypography'
import { useRef, useEffect } from 'react'

export default { title: 'Compositions|CustomizeThemeTypography' }

// Hook
function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef()

  // Store current value in ref
  useEffect(() => {
    ref.current = value
  }, [value]) // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current
}

export const CustomizeThemeTypographyFirstStory = (storyProps) => {
  const { updateTheme, theme } = storyProps
  const {
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
  } = theme
  const props = {
    fonts,
    fontFaces,
    defaultLineHeight,
    defaultLetterSpacing,
    headingLineHeight,
    headingLetterSpacing,
    lineHeights,
    fontSizes,
    fontWeights,
    letterSpacings
  }

  const updateThemeTypography = (newTypographyTheme) => {
    updateTheme(newTypographyTheme)
  }

  return (
    <CustomizeThemeTypography
      {...props}
      updateThemeTypography={updateThemeTypography}
    />
  )
}
