import * as React from 'react'
import { CustomizeSpacing } from './CustomizeSpacing'
import { baseTheme } from '../../Theme/base.theme'

export default { title: 'Compositions|CustomizeSpacing' }

export const CustomizeSpacingFirstStory = () => {
  const { space } = baseTheme
  return <CustomizeSpacing space={space} />
}
