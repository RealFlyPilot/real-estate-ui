import * as React from 'react'
import { CustomizeThemeSpacing } from './CustomizeThemeSpacing'
import { baseTheme } from '../../Theme/base.theme'

export default { title: 'Compositions|CustomizeThemeSpacing' }

export const CustomizeThemeSpacingFirstStory = () => {
  const { space } = baseTheme
  return <CustomizeThemeSpacing space={space} />
}
