import React, { createContext, useContext, useState } from 'react'

// @ts-ignore
const themeStorage =
  localStorage.getItem('theme') || localStorage.getItem('welcome')

const ThemeContext: React.Context<{
  theme: any | null
  setTheme: () => void
}> = createContext({
  theme: themeStorage,
  setTheme: () => {}
})

export function useThemeContext() {
  const { theme } = useContext(ThemeContext)
  return theme
}

export function useSetThemeContext() {
  const { setTheme } = useContext(ThemeContext)
  return setTheme
}

export function ThemeProvider({ children }: any) {
  const [theme, setTheme]: any = useState(themeStorage)
  console.log('theme: ', theme)
  // @ts-ignore
  process.browser && localStorage.setItem('theme', theme)

  const value = {
    theme,
    setTheme
  }
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
