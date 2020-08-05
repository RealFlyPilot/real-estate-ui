import * as React from 'react'
import { CustomizeThemePalette } from '../CustomizeThemePalette/CustomizeThemePalette'
import { CustomizeThemeSpacing } from '../CustomizeThemeSpacing'
import { CustomizeThemeTypography } from '../CustomizeThemeTypography/CustomizeThemeTypography'
import { Stack } from '../../Components/Stack'

export interface CustomizeThemeProps {
  theme: any
}

export const CustomizeTheme: React.SFC<CustomizeThemeProps> = ({ theme }) => {
  const { space, colors, fonts, fontFaces } = theme
  return (
    <Stack>
      <CustomizeThemePalette colors={colors} />
      <CustomizeThemeSpacing space={space} />
      <CustomizeThemeTypography fonts={fonts} fontFaces={fontFaces} />
    </Stack>
  )
}
