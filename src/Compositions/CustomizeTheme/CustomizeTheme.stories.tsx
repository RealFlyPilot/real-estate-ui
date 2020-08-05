import * as React from 'react'
import { CustomizeTheme } from './CustomizeTheme'

import { baseTheme } from '../../Theme/base.theme'

export default { title: 'Compositions|CustomizeTheme' }

export const CustomizeThemeFirstStory = () => {
  return <CustomizeTheme theme={baseTheme} />
}
