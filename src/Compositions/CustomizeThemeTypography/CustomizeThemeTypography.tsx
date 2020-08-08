import * as React from 'react'
import { Box } from '../../Components/Box'
import { Card } from '../../Components/Card'
import { Stack } from '../../Components/Stack'
import { Text } from '../../Components/Text'
import { Accordion } from '../../Components/Accordion'
import { icons } from '../../Components/Icon'
import { Select } from '../../Components/Select'
import { ConnectedField } from '../../Components/ConnectedField'
import { Tag } from '../../Components/Tag'
import { Form } from '../../Components/Form'
import { InputText } from '../../Components/InputText'
import { Button } from '../../Components/Button'
import useFetch from 'react-fetch-hook'
import { T_BaseTheme } from '../../Theme/theme.types'

const { BoldIcon } = icons

export interface CustomizeThemeTypographyProps {
  fonts: T_BaseTheme['fonts']
  fontFaces: T_BaseTheme['fontFaces']
  fontSizes: T_BaseTheme['fontSizes']
  defaultLineHeight: T_BaseTheme['defaultLineHeight']
  defaultLetterSpacing: T_BaseTheme['defaultLetterSpacing']
  headingLineHeight: T_BaseTheme['headingLineHeight']
  headingLetterSpacing: T_BaseTheme['headingLetterSpacing']
  lineHeights: T_BaseTheme['lineHeights']
  fontWeights: T_BaseTheme['fontWeights']
  letterSpacings: T_BaseTheme['letterSpacings']
  updateThemeTypography: Function
}

export const CustomizeThemeTypography: React.SFC<CustomizeThemeTypographyProps> = ({
  fonts,
  fontFaces,
  fontSizes,
  defaultLineHeight,
  defaultLetterSpacing,
  headingLineHeight,
  headingLetterSpacing,
  lineHeights,
  fontWeights,
  letterSpacings,
  updateThemeTypography
}) => {
  const [
    customTypographySettings,
    setCustomTypographySettings
  ] = React.useState({
    fonts,
    fontFaces,
    fontSizes,
    defaultLineHeight,
    defaultLetterSpacing,
    headingLineHeight,
    headingLetterSpacing,
    lineHeights,
    fontWeights,
    letterSpacings,
    updateThemeTypography
  })

  const updateCustomTypographySettings = (typographySettings) => {
    setCustomTypographySettings((customTypographySettings) => ({
      ...customTypographySettings,
      ...typographySettings
    }))
  }
  const [themeFonts, setThemeFonts] = React.useState<T_BaseTheme['fonts']>(
    fonts
  )
  const updateTextFont = (newFont) => {
    if (newFont) {
      addFontLink(newFont)
      setThemeFonts((themeFonts) => ({
        ...themeFonts,
        texts: newFont
      }))
      setTextFontUpdated(true)
    }
  }

  // ============================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================== //

  const [headingsFontUpdated, setHeadingsFontUpdated] = React.useState(false)
  const updateHeadingsFont = (newFont) => {
    if (newFont) {
      addFontLink(newFont)
      setThemeFonts((themeFonts) => ({
        ...themeFonts,
        headings: newFont
      }))
      setHeadingsFontUpdated(true)
    }
  }

  // ============================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================== //

  const [googleFonts, setGoogleFonts] = React.useState(null)

  const [textFontUpdated, setTextFontUpdated] = React.useState(false)

  const [themeFontSizes, setThemeFontSizes] = React.useState(fontSizes)

  const [themeDefaultLineHeight, setThemeDefaultLineHeight] = React.useState(
    defaultLineHeight
  )
  const updateDefaultThemeLineHeight = ({ target: { value } }) => {
    setThemeDefaultLineHeight(value)
  }

  // ============================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================== //

  const [
    themeDefaultLetterSpacing,
    setThemeDefaultLetterSpacing
  ] = React.useState(defaultLetterSpacing)
  const updateThemeDefaultLetterSpacing = ({ target: { value } }) => {
    setThemeDefaultLetterSpacing(parseInt(value) || 0)
  }

  // ============================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================== //

  const [themeHeadingLineHeight, setThemeHeadingLineHeight] = React.useState(
    headingLineHeight
  )
  const updateThemeHeadingLineheight = ({ target: { value } }) => {
    if (value) {
      setThemeHeadingLineHeight(parseInt(value) || 0)
      // setHeadingsFontUpdated(true)
    }
  }

  // ============================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================== //

  const [
    themeHeadingLetterSpacing,
    setThemeHeadingLetterSpacing
  ] = React.useState(headingLetterSpacing)
  const updateThemeHeadingLetterSpacing = ({ target: { value } }) => {
    if (value) {
      setThemeHeadingLetterSpacing(value)
      // setHeadingsFontUpdated(true)
    }
  }

  // ============================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================== //

  const [themeLetterSpacings, setThemeLetterSpacings] = React.useState(
    letterSpacings
  )
  const updateThemeLetterSpacings = ({ target: { value, name } }) => {
    setThemeLetterSpacings((themeLetterSpacings) => ({
      ...themeLetterSpacings,
      [name]: parseInt(value) || 0
    }))
  }

  // ============================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================== //

  const [themeLineHeights, setThemeLineHeights] = React.useState(lineHeights)
  const updateThemeLineHeights = ({ target: { value, name } }) => {
    setThemeLineHeights((themeLineHeights) => ({
      ...themeLineHeights,
      [name]: parseInt(value) || 0
    }))
  }

  const { headings, texts } = themeFonts

  const headerVariants = ['h0', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']
  const bodyVariants = [
    'body1',
    'body2',
    'body3',
    'body4',
    'button',
    'subtitle1',
    'subtitle2',
    'meta1',
    'meta2'
  ]

  // ============================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================== //

  const { isLoading, data }: any = useFetch(
    `https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_GOOGLE_API_KEY}`
  )

  const fontLink = (newFont) =>
    `https://fonts.googleapis.com/css2?family=${newFont.replace(/' '/g, '+')}`

  const addFontLink = (newFont) => {
    const link = document.createElement('link')
    const href = fontLink(newFont)

    link.href = href
    link.rel = 'stylesheet'

    if (document && document.head) {
      document.head.appendChild(link)
    }
  }

  React.useEffect(() => {
    if (data && data.items && data.items.length && !googleFonts) {
      const { items } = data

      setGoogleFonts(
        items.slice(0, 100).map((item) => ({
          ...item,
          label: item.family,
          value: item.family
        }))
      )
    }
  }, [data])

  const saveCustomSettings = () => {
    alert('saving custom settings')
    updateThemeTypography(customTypographySettings)
  }
  React.useEffect(() => {
    if (themeDefaultLineHeight) {
      updateCustomTypographySettings({
        defaultLineHeight: themeDefaultLineHeight
      })
    }
    if (themeDefaultLetterSpacing) {
      updateCustomTypographySettings({
        defaultLetterSpacing: themeDefaultLetterSpacing
      })
    }
    if (themeHeadingLineHeight) {
      updateCustomTypographySettings({
        headingLineHeight: themeHeadingLineHeight
      })
    }
    if (themeHeadingLetterSpacing) {
      updateCustomTypographySettings({
        headingLetterSpacing: themeHeadingLetterSpacing
      })
    }
    if (themeLineHeights) {
      updateCustomTypographySettings({
        lineHeights: themeLineHeights
      })
    }

    if (themeLetterSpacings) {
      updateCustomTypographySettings({
        letterSpacings: themeLetterSpacings
      })
    }
  }, [
    themeDefaultLineHeight,
    themeDefaultLetterSpacing,
    themeHeadingLineHeight,
    themeHeadingLetterSpacing,
    themeLineHeights,
    themeLetterSpacings
  ])

  // ============================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================== //

  return (
    <Accordion
      title={
        <Box display='flex' alignItems='center'>
          <BoldIcon mr={12} />
          <Text as='h3' fontWeight='bold'>
            Theme Typography
          </Text>
        </Box>
      }
    >
      <Stack>
        <Box>
          <Stack direction='row' spacing='xl' flexWrap='no-wrap' width='100%'>
            <Box>
              <Box>
                <Text as='h4'>Headings</Text>
                <Card>
                  <Card.Body>
                    <Text
                      as='h5'
                      fontWeight='bold'
                      mt={0}
                      mb='lg'
                      color='dark.900'
                    >
                      {headings}
                    </Text>
                    <Tag variant='info'>Examples</Tag>
                    <br />
                    <Form
                      initialValues={{
                        themeLineHeights: themeLineHeights,
                        themeLetterSpacings: themeLetterSpacings
                      }}
                    >
                      {headerVariants.map((variant: any, index: any) => (
                        <Box key={index}>
                          <Text
                            fontFamily={
                              headingsFontUpdated ? themeFonts.headings : null
                            }
                            variant={variant}
                          >
                            Heading {index + 1}
                          </Text>
                          <ConnectedField
                            id={`${variant}.lineheight`}
                            component={InputText}
                            onChange={updateThemeLineHeights}
                            name={variant}
                            value={themeLineHeights[variant]}
                            label='Adjust the lineheight setting'
                          />
                          <ConnectedField
                            id={`${variant}.letter-spacing`}
                            component={InputText}
                            onChange={updateThemeLetterSpacings}
                            name={variant}
                            value={themeLetterSpacings[variant]}
                            label='Adjust the letter spacing setting'
                          />
                        </Box>
                      ))}
                    </Form>
                  </Card.Body>
                </Card>
              </Box>

              <Box>
                <Text as='h4'>Choose Heading Lineheight</Text>
                <Card>
                  <Card.Body>
                    <Text
                      as='h5'
                      fontWeight='bold'
                      mt={0}
                      mb='lg'
                      color='dark.900'
                    >
                      Default heading lineheight: {themeHeadingLineHeight}
                    </Text>
                    <Form
                      initialValues={{
                        themeHeadingLineHeight: themeHeadingLineHeight
                      }}
                    >
                      <ConnectedField
                        component={InputText}
                        onChange={updateThemeHeadingLineheight}
                        name='themeHeadingLineHeight'
                        value={themeHeadingLineHeight}
                        label='Adjust the default setting'
                      />
                    </Form>
                  </Card.Body>
                </Card>
              </Box>
              <Box>
                <Text as='h4'>Choose Heading Letter Spacing</Text>
                <Card>
                  <Card.Body>
                    <Text
                      as='h5'
                      fontWeight='bold'
                      mt={0}
                      mb='lg'
                      color='dark.900'
                    >
                      Default heading letter spacing:
                      {themeHeadingLetterSpacing}
                    </Text>
                    <Form
                      initialValues={{
                        themeHeadingLetterSpacing: themeHeadingLetterSpacing
                      }}
                    >
                      <ConnectedField
                        component={InputText}
                        onChange={updateThemeHeadingLetterSpacing}
                        name='themeHeadingLetterSpacing'
                        value={themeHeadingLetterSpacing}
                        label='Adjust the default setting'
                      />
                    </Form>
                  </Card.Body>
                </Card>
              </Box>
            </Box>

            <Box minWidth={400}>
              <Text as='h4'>Text</Text>
              <Card>
                <Card.Body>
                  <Text
                    as='h5'
                    fontWeight='bold'
                    mt={0}
                    mb='lg'
                    color='dark.900'
                  >
                    {texts}
                  </Text>
                  <Tag variant='info'>Examples</Tag>
                  <br />
                  <Form
                    initialValues={{
                      themeLineHeights: themeLineHeights,
                      themeLetterSpacings: themeLetterSpacings
                    }}
                  >
                    {bodyVariants.map((variant: any, index: any) => (
                      <Box key={index}>
                        <Text
                          fontFamily={textFontUpdated ? themeFonts.texts : null}
                          variant={variant}
                        >
                          {variant}
                        </Text>
                        <ConnectedField
                          id={`${variant}.lineheight`}
                          component={InputText}
                          onChange={updateThemeLineHeights}
                          name={variant}
                          value={themeLineHeights[variant]}
                          label='Adjust the lineheight setting'
                        />
                        <br />
                        <ConnectedField
                          id={`${variant}.letter-spacing`}
                          component={InputText}
                          onChange={updateThemeLetterSpacings}
                          name={variant}
                          value={themeLetterSpacings[variant]}
                          label='Adjust the letter spacing setting'
                        />
                      </Box>
                    ))}
                  </Form>
                </Card.Body>
              </Card>
            </Box>
            <Box>
              <Text as='h4'>Choose New Font</Text>
              <Stack spacing='xl'>
                <Card minHeight={300}>
                  <Card.Body>
                    <Text
                      as='h5'
                      fontWeight='bold'
                      mt={0}
                      mb='lg'
                      color='dark.900'
                    >
                      Headings
                    </Text>
                    <Form initialValues={{ headingsFont: themeFonts.headings }}>
                      <ConnectedField
                        component={Select}
                        options={googleFonts ? googleFonts : []}
                        onChange={updateHeadingsFont}
                        name='headingsFont'
                        label='Search Google Fonts'
                        isClearable
                      />
                    </Form>
                  </Card.Body>
                </Card>
                <Card minHeight={300}>
                  <Card.Body>
                    <Text
                      as='h5'
                      fontWeight='bold'
                      mt={0}
                      mb='lg'
                      color='dark.900'
                    >
                      Text
                    </Text>
                    <Form initialValues={{ textFont: themeFonts.texts }}>
                      <ConnectedField
                        component={Select}
                        options={googleFonts ? googleFonts : []}
                        onChange={updateTextFont}
                        name='textFont'
                        label='Search Google Fonts'
                        isClearable
                      />
                    </Form>
                  </Card.Body>
                </Card>
              </Stack>
            </Box>
            <Box>
              <Text as='h4'>Choose Default Typography Settings</Text>
              <Stack spacing='xl'>
                <Card>
                  <Card.Body>
                    <Text
                      as='h5'
                      fontWeight='bold'
                      mt={0}
                      mb='lg'
                      color='dark.900'
                    >
                      Default Lineheight value: {themeDefaultLineHeight}
                    </Text>
                    <Form
                      initialValues={{
                        defaultLineHeights: themeDefaultLineHeight
                      }}
                    >
                      <ConnectedField
                        component={InputText}
                        onChange={updateDefaultThemeLineHeight}
                        value={themeDefaultLineHeight}
                        name='defaultLineHeights'
                        label='Adjust the default setting'
                      />
                    </Form>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Text
                      as='h5'
                      fontWeight='bold'
                      mt={0}
                      mb='lg'
                      color='dark.900'
                    >
                      Default Letter Spacing: {themeDefaultLetterSpacing}
                    </Text>
                    <Form
                      initialValues={{
                        themeDefaultLetterSpacing: themeDefaultLetterSpacing
                      }}
                    >
                      <ConnectedField
                        component={InputText}
                        onChange={updateThemeDefaultLetterSpacing}
                        value={themeDefaultLetterSpacing}
                        name='themeDefaultLetterSpacing'
                        label='Adjust the default setting'
                      />
                    </Form>
                  </Card.Body>
                </Card>
              </Stack>
            </Box>
          </Stack>
        </Box>
        <Box>
          <Button onClick={saveCustomSettings} variant='primary'>
            Save
          </Button>
        </Box>
      </Stack>
    </Accordion>
  )
}
