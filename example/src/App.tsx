import React, { useEffect, useState } from 'react'
import { baseTheme } from 'real-estate-ui'
import merge from 'lodash.merge'
import { useThemeContext } from './Context/ThemeProvider'
import DashboardLayout from './Layouts/DashboardLayout'
// import { EditableThemeContextProvider } from './EditableThemeContext'

/* eslint-disable react/prop-types */

const baseDocTheme = (colors) => ({
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

const darkDocTheme = (colors) => ({
  docs: {
    page: {
      backgroundColor: colors.light[500],
      color: colors.dark[900]
    },
    code: {
      background: colors.light[900]
    },
    header: {
      backgroundColor: colors.light[900]
    },
    navigation: {
      color: colors.dark[900]
    },
    navigationMobile: {
      color: colors.dark[900]
    }
  }
})

const coreTheme = createTheme()

const getTheme = (themeStorage) => {
  if (themeStorage === 'welcome') {
    return merge(welcomeTheme, baseDocTheme(welcomeTheme.colors))
  } else if (themeStorage === 'dark') {
    return merge(darkTheme, darkDocTheme(darkTheme.colors))
  } else {
    return baseDocTheme(coreTheme.colors)
  }
}

const App = () => {
  const themeStorage = useThemeContext()
  const initialTheme = merge(welcomeTheme, baseDocTheme(welcomeTheme.colors))
  const [allTheme, setAllTheme] = useState(initialTheme)

  useEffect(() => {
    setAllTheme(getTheme(themeStorage))
  }, [themeStorage])

  return (
    <RuiProvider theme={createTheme(allTheme)}>
      <DashboardLayout />
    </RuiProvider>
    // <EditableThemeContextProvider baseTheme={baseTheme}>
    // <ThemeProvider theme={baseTheme}>
    //   <DashboardLayout />
    // </ThemeProvider>
    // </EditableThemeContextProvider>
  )
}

export default App
