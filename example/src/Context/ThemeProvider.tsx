import React, { createContext, useContext, useState } from 'react'
import { createTheme, welcomeTheme } from 'real-estate-ui'
import merge from 'lodash.merge'
import { T_BaseTheme } from '../../../dist/Theme/theme.types'

const baseDocTheme = (colors: any) => ({
  docs: {
    page: {
      backgroundColor: colors.nude[100]
    },
    code: {
      background: colors.dark[700]
    },
    header: {
      backgroundColor: colors.dark[700]
    },
    navigation: {
      color: colors.light[900]
    },
    navigationMobile: {
      color: colors.dark[900]
    }
  }
})

const coreTheme = createTheme(
  merge(welcomeTheme, baseDocTheme(welcomeTheme.colors))
)
const ThemeContext: React.Context<{
  theme: T_BaseTheme
  customTheme: T_BaseTheme
  updateCustomTheme: (args: any) => void
}> = createContext({
  theme: coreTheme,
  customTheme: coreTheme,
  updateCustomTheme: (args) => {}
})

export function ThemeProvider({ children }: any) {
  const [theme]: any = useState(coreTheme)
  const [customTheme, setCustomTheme] = useState<T_BaseTheme>(coreTheme)

  const updateCustomTheme: any = (newThemeValues: any) => {
    console.log('newThemeValues: ', newThemeValues)

    setCustomTheme((customTheme) => ({
      ...customTheme,
      ...newThemeValues
    }))
  }

  return (
    <ThemeContext.Provider value={{ theme, customTheme, updateCustomTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeContext() {
  const { theme, customTheme, updateCustomTheme } = useContext(ThemeContext)
  return { theme, customTheme, updateCustomTheme }
}

export function useSetThemeContext() {
  const { updateCustomTheme } = useContext(ThemeContext)
  return updateCustomTheme
}
