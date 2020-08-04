import React from 'react'
import { baseTheme } from 'real-estate-ui'

export const EditableThemeContext: any = React.createContext(baseTheme)

export interface EditableThemeContextProviderProps {
  baseTheme: any
  children?: any
}

export const EditableThemeContextProvider: React.SFC<EditableThemeContextProviderProps> = ({
  baseTheme,
  children
}) => {
  const [appTheme, setAppTheme]: any = React.useState(baseTheme)

  const updateAppTheme = (newThemeObj: {}) => {
    setAppTheme((appTheme: any) => ({
      ...appTheme,
      ...newThemeObj
    }))
  }

  return (
    <EditableThemeContext.Provider value={{ appTheme, updateAppTheme }}>
      {children}
    </EditableThemeContext.Provider>
  )
}
