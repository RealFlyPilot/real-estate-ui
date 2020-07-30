import * as React from 'react'
import { createTheme, WuiProvider } from '@welcome-ui/core'

export interface ThemeProviderProps {
  theme: object
  children: any
}

export const ThemeProvider: React.SFC<ThemeProviderProps> = ({
  children,
  theme
}) => {
  const appTheme = createTheme(theme)
  return (
    <WuiProvider
      theme={appTheme}
      // Will inject a CSS reset with normalizer
      hasGlobalStyle
    >
      {children}
    </WuiProvider>
  )
}
