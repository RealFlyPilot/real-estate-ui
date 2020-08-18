import React from 'react'
import {
  CustomizeThemePalette,
  CustomizeThemeSpacing,
  CustomizeThemeTypography,
  Stack,
  Box,
  Text,
  Button,
  GetIcon,
  SidebarLayout
} from 'real-estate-ui'
import { useThemeContext } from '../Context/ThemeProvider'
import { ThemeTreeDisplay } from './ThemeTreeDisplay/ThemeTreeDisplay'

export interface CustomizeThemeProps {}

export const CustomizeTheme: React.SFC<CustomizeThemeProps> = () => {
  const { customTheme, updateCustomTheme } = useThemeContext()
  const fileName = 'theme.json'
  const [fileData, setFileData] = React.useState(JSON.stringify(customTheme))
  const [fileDataURI, setFileDataURI] = React.useState(
    `data:application/json;charset=utf-8,${encodeURIComponent(fileData)}`
  )

  const {
    space,
    colors,
    fonts,
    // fontFaces,
    defaultLineHeight,
    defaultLetterSpacing,
    headingLineHeight,
    headingLetterSpacing,
    lineHeights,
    fontWeights,
    letterSpacings,
    fontSizes,
    textsFontFamily
  } = customTheme

  const typographyProps = {
    fonts,
    // fontFaces, having issues with updating this field properly
    defaultLineHeight,
    defaultLetterSpacing,
    headingLineHeight,
    headingLetterSpacing,
    lineHeights,
    fontWeights,
    letterSpacings,
    fontSizes,
    textsFontFamily
  }
  const [demoTheme, setDemoTheme] = React.useState({
    colors,
    space,
    ...typographyProps
  })

  const updateThemePalette = (newPaletteValues: any) => {
    console.log('newPaletteValues: ', newPaletteValues)
    setDemoTheme((demoTheme) => ({
      ...demoTheme,
      colors: {
        ...colors,
        ...newPaletteValues
      }
    }))
  }
  const updateThemeSpacing = (newSpacingValues: any) => {
    setDemoTheme((demoThemeValues: any) => ({
      ...demoThemeValues,
      space: {
        ...space,
        ...newSpacingValues
      }
    }))
  }
  const updateThemeTypography = (newThemeTypography: any) => {
    console.log('newThemeTypography: ', newThemeTypography)

    setDemoTheme((demoThemeValues: any) => ({
      ...demoThemeValues,
      ...newThemeTypography
    }))
  }

  React.useEffect(() => {
    if (demoTheme && Object.keys(demoTheme).length) {
      updateCustomTheme(demoTheme)
    }
  }, [demoTheme])

  React.useEffect(() => {
    setFileData(JSON.stringify(customTheme))
  }, [customTheme])

  React.useEffect(() => {
    if (fileData && fileData.length) {
      setFileDataURI(
        `data:application/json;charset=utf-8,${encodeURIComponent(fileData)}`
      )
    }
  }, [fileData])

  return (
    <SidebarLayout px={16}>
      <SidebarLayout.Sidebar width='max-content'>
        <Box>
          <Stack display='flex' flexDirection='row' alignItems='center'>
            <Text as='h3' fontWeight='bold'>
              Current Theme
            </Text>
            <Button shape='circle' size='sm' variant='primary' ml={'auto'}>
              <a href={fileDataURI} download={fileName}>
                <GetIcon size='lg' />
              </a>
            </Button>
          </Stack>

          <ThemeTreeDisplay
            allowedCustomizationKeys={{
              colors,
              space,
              ...typographyProps
            }}
          />
        </Box>
      </SidebarLayout.Sidebar>
      <SidebarLayout.Main px={16}>
        <Box>
          <Stack wrapChildren>
            <CustomizeThemePalette
              colors={colors}
              updateThemePalette={updateThemePalette}
            />
            <CustomizeThemeSpacing
              updateThemeSpacing={updateThemeSpacing}
              space={space}
            />
            <CustomizeThemeTypography
              {...typographyProps}
              updateThemeTypography={updateThemeTypography}
            />
          </Stack>
        </Box>
      </SidebarLayout.Main>
    </SidebarLayout>
  )
}
