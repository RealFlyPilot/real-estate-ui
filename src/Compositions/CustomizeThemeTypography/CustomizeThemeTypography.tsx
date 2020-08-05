import * as React from 'react'
import {
  Box,
  Card,
  Stack,
  Text,
  Accordion,
  icons,
  Select,
  ConnectedField,
  Tag,
  Form
} from '../../index'
import useFetch from 'react-fetch-hook'

const { BoldIcon } = icons

export interface CustomizeThemeTypographyProps {
  fonts: {
    headings: string
    icons: string
    texts: string
  }
  fontFaces: {
    'welcome-font': any
    'welcome-icon-font': any
    'work-sans': any
  }
  updateThemeTypography: Function
}

export const CustomizeThemeTypography: React.SFC<CustomizeThemeTypographyProps> = ({
  fonts,
  fontFaces
}) => {
  const [themeFonts, setThemeFonts] = React.useState(fonts)
  const [googleFonts, setGoogleFonts] = React.useState(null)
  const [headingsFontUpdated, setHeadingsFontUpdated] = React.useState(false)
  const [textFontUpdated, setTextFontUpdated] = React.useState(false)
  console.log('googleFonts: ', googleFonts)
  console.log('setGoogleFonts: ', setGoogleFonts)

  const googleFontsApiKey = 'AIzaSyDcBMHKhI8HeG_Lqf1nVQFZT1tZoun8VcA'
  const { isLoading, data }: any = useFetch(
    `https://www.googleapis.com/webfonts/v1/webfonts?key=${googleFontsApiKey}`
  )

  const fontLink = (newFont) =>
    `https://fonts.googleapis.com/css2?family=${newFont.replace(/' '/g, '+')}`

  const addFontLink = (newFont) => {
    const link = document.createElement('link')
    const href = fontLink(newFont)
    console.log('href: ', href)
    link.href = href
    link.rel = 'stylesheet'
    console.log('link.rel: ', link.rel)
    if (document && document.head) {
      document.head.appendChild(link)
    }
  }

  const updateTextFont = (newFont) => {
    console.log('newFont: ', newFont)
    if (newFont) {
      addFontLink(newFont)
      setThemeFonts((themeFonts) => ({
        ...themeFonts,
        texts: newFont
      }))
      setTextFontUpdated(true)
    }
  }

  const updateHeadingsFont = (newFont) => {
    console.log('newFont: ', newFont)
    if (newFont) {
      addFontLink(newFont)
      setThemeFonts((themeFonts) => ({
        ...themeFonts,
        headings: newFont
      }))
      setHeadingsFontUpdated(true)
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

  const { headings, texts } = themeFonts

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
      <Stack direction='row' spacing='xl'>
        <Box>
          <Text as='h4'>Headings</Text>
          <Card>
            <Card.Body>
              <Text as='h5' fontWeight='bold' mt={0} mb='lg' color='dark.900'>
                {headings}
              </Text>
              <Tag variant='info'>Examples</Tag>
              <br />
              <Text
                fontFamily={headingsFontUpdated ? themeFonts.headings : null}
                variant='h0'
              >
                Heading 0
              </Text>
              <Text
                fontFamily={headingsFontUpdated ? themeFonts.headings : null}
                variant='h1'
              >
                Heading 1
              </Text>
              <Text
                fontFamily={headingsFontUpdated ? themeFonts.headings : null}
                variant='h2'
              >
                Heading 2
              </Text>
              <Text
                fontFamily={headingsFontUpdated ? themeFonts.headings : null}
                variant='h3'
              >
                Heading 3
              </Text>
              <Text
                fontFamily={headingsFontUpdated ? themeFonts.headings : null}
                variant='h4'
              >
                Heading 4
              </Text>
              <Text
                fontFamily={headingsFontUpdated ? themeFonts.headings : null}
                variant='h5'
              >
                Heading 5
              </Text>
              <Text
                fontFamily={headingsFontUpdated ? themeFonts.headings : null}
                variant='h6'
              >
                Heading 6
              </Text>
            </Card.Body>
          </Card>
        </Box>
        <Box>
          <Text as='h4'>Text</Text>
          <Card>
            <Card.Body>
              <Text as='h5' fontWeight='bold' mt={0} mb='lg' color='dark.900'>
                {texts}
              </Text>
              <Tag variant='info'>Examples</Tag>
              <br />
              <Text
                fontFamily={textFontUpdated ? themeFonts.texts : null}
                variant='body1'
              >
                Body 1
              </Text>
              <Text
                fontFamily={textFontUpdated ? themeFonts.texts : null}
                variant='body2'
              >
                Body 2
              </Text>
              <Text
                fontFamily={textFontUpdated ? themeFonts.texts : null}
                variant='body3'
              >
                Body 3
              </Text>
              <Text
                fontFamily={textFontUpdated ? themeFonts.texts : null}
                variant='body4'
              >
                Body 4
              </Text>
              <Text
                fontFamily={textFontUpdated ? themeFonts.texts : null}
                variant='subtitle1'
              >
                Subtitle 1
              </Text>
              <Text
                fontFamily={textFontUpdated ? themeFonts.texts : null}
                variant='subtitle2'
              >
                Subtitle 2
              </Text>
              <Text
                fontFamily={textFontUpdated ? themeFonts.texts : null}
                variant='meta1'
              >
                Meta 1
              </Text>
              <Text
                fontFamily={textFontUpdated ? themeFonts.texts : null}
                variant='meta2'
              >
                Meta 2
              </Text>
            </Card.Body>
          </Card>
        </Box>
        <Box>
          <Text as='h4'>Choose New Font</Text>
          <Card minHeight={300}>
            <Card.Body>
              <Text as='h5' fontWeight='bold' mt={0} mb='lg' color='dark.900'>
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
              <Text as='h5' fontWeight='bold' mt={0} mb='lg' color='dark.900'>
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
        </Box>

        {/* // <ConnectedField
            //   component={InputText}
            //   flexDirection='row'
            //   label={<Tag variant='info'>{key}</Tag>}
            //   name={key}
            //   onChange={editSpacing}
            // />
           */}
      </Stack>
    </Accordion>
  )
}
