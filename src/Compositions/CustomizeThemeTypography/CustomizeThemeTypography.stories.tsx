import * as React from 'react'
import { CustomizeThemeTypography } from './CustomizeThemeTypography'
import { baseTheme } from '../../Theme/base.theme'

export default { title: 'Compositions|CustomizeThemeTypography' }

export const CustomizeThemeTypographyFirstStory = () => {
  const { fonts, fontFaces } = baseTheme
  const updateThemeTypography = (newTypographyTheme) => {
    console.log('newTypographyTheme: ', newTypographyTheme)
  }
  return (
    <CustomizeThemeTypography
      fonts={fonts}
      fontFaces={fontFaces}
      updateThemeTypography={updateThemeTypography}
    />
  )
}
