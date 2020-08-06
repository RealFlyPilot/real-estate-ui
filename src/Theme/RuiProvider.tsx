import * as React from 'react'
import { createTheme, WuiProvider } from '@welcome-ui/core'

export interface ThemeProviderProps {
  theme: object // strongly type this prop
  children: any
}

const RuiProvider: React.SFC<ThemeProviderProps> = ({ children, theme }) => {
  // const appTheme = createTheme(theme)
  return (
    <WuiProvider theme={theme} hasGlobalStyle>
      {children}
    </WuiProvider>
  )
}

export { createTheme, RuiProvider }
