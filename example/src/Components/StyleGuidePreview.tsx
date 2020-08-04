import * as React from 'react'
// @ts-ignore
import { SketchPicker } from 'react-color'
import {
  InputText,
  Box,
  Card,
  Stack,
  Button,
  Text,
  Accordion,
  Hint,
  icons,
  Shape,
  Modal,
  useModalState
} from 'real-estate-ui'
import { EditableThemeContext } from '../EditableThemeContext'

const { PiechartIcon, ResetIcon, SettingsIcon } = icons

export interface StyleGuidePreviewProps {}

export const StyleGuidePreview: React.SFC<StyleGuidePreviewProps> = () => {
  const { appTheme } = React.useContext(EditableThemeContext)
  const {
    colors: { primary }
  } = appTheme
  console.log('primary: ', primary)
  // console.log('appTheme: ', appTheme)

  const [state, setState]: any = React.useState({
    viewPrimaryColors: false,
    viewTypography: false,
    viewSpacing: false,
    viewColorPicker: false,
    // viewColor2Picker: false,
    // viewColor3Picker: false,
    // viewColor4Picker: false,
    // viewColor5Picker: false,
    // viewTextColor1Picker: false,
    // viewTextColor2Picker: false,
    // viewTextColor3Picker: false,
    typographyModal: false,
    spacingModal: false,
    previewBorder: '20px',
    previewMargin: '20px',
    previewPadding: '20px',
    data: {}
  })

  // const resetPickers = () => {
  //   setState((state: any) => ({
  //     ...state,
  //     viewColorPicker: false
  //     // viewColor2Picker: false,
  //     // viewColor3Picker: false,
  //     // viewColor4Picker: false,
  //     // viewColor5Picker: false,
  //     // viewTextColor1Picker: false,
  //     // viewTextColor2Picker: false,
  //     // viewTextColor3Picker: false
  //   }))
  // }

  const resetPreview = () => {
    setState((state: any) => ({
      ...state,
      previewBorder: '20px',
      previewMargin: '20px',
      previewPadding: '20px'
    }))
  }

  const setPreviewBorder = (target: any) => {
    setState((state: any) => ({
      ...state,
      previewBorder: state.data[target]
    }))
  }

  const setPreviewMargin = (target: any) => {
    setState((state: any) => ({
      ...state,
      previewMargin: state.data[target]
    }))
  }

  const setPreviewPadding = (target: any) => {
    setState((state: any) => ({
      ...state,
      previewPadding: state.data[target]
    }))
  }

  // const toggleTypographyModal = () => {
  //   setState((state: any) => ({
  //     ...state,
  //     typographyModal: !state.typographyModal
  //   }))
  // }

  // const toggleSpacingModal = () => {
  //   setState((state: any) => ({
  //     ...state,
  //     spacingModal: !state.spacingModal
  //   }))
  // }

  const showColorPicker = () => {
    // resetPickers()
    setState((state: any) => ({
      ...state,
      viewColorPicker: true
    }))
  }

  // const viewSpacing = () => {
  //   setState((state: any) => ({
  //     ...state,
  //     viewSpacing: !state.viewSpacing
  //   }))
  // }

  // const viewTypography = () => {
  //   setState((state: any) => ({
  //     ...state,
  //     viewTypography: !state.viewTypography
  //   }))
  // }

  // const viewPrimaryColors = () => {
  //   setState((state: any) => ({
  //     ...state,
  //     viewPrimaryColors: !state.viewPrimaryColors
  //   }))
  // }

  const handleChange = (e: any) => {
    const id = e.target.getAttribute('id')
    const value = e.target.value
    const { data }: any = state

    data[id] = value

    setState((state: any) => ({
      ...state,
      data: data
    }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(state.data)
  }

  // const handlePrimaryColor1Change = (color: any) => {
  //   const formattedRGBA = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`
  //   const { data }: any = state

  //   data.primaryColor1 = formattedRGBA

  //   setState((state: any) => ({
  //     ...state,
  //     data: data,
  //     viewColor1Picker: false
  //   }))
  // }

  // const handlePrimaryColor2Change = (color: any) => {
  //   const formattedRGBA = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`
  //   const { data }: any = state

  //   data.primaryColor2 = formattedRGBA

  //   setState((state: any) => ({
  //     ...state,
  //     data: data,
  //     viewColor2Picker: false
  //   }))
  // }

  // const handlePrimaryColor3Change = (color: any) => {
  //   const formattedRGBA = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`
  //   const { data }: any = state

  //   data.primaryColor3 = formattedRGBA

  //   setState((state: any) => ({
  //     ...state,
  //     data: data,
  //     viewColor3Picker: false
  //   }))
  // }

  // const handlePrimaryColor4Change = (color: any) => {
  //   const formattedRGBA = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`
  //   const { data }: any = state

  //   data.primaryColor4 = formattedRGBA

  //   setState((state: any) => ({
  //     ...state,
  //     data: data,
  //     viewColor4Picker: false
  //   }))
  // }

  // const handlePrimaryColor5Change = (color: any) => {
  //   const formattedRGBA = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`
  //   const { data }: any = state

  //   data.primaryColor5 = formattedRGBA

  //   setState((state: any) => ({
  //     ...state,
  //     data: data,
  //     viewColor5Picker: false
  //   }))
  // }

  const handleTextColor1Change = (color: any) => {
    const formattedRGBA = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`
    const { data }: any = state

    data.textColor1 = formattedRGBA

    setState((state: any) => ({
      ...state,
      data: data,
      viewTextColor1Picker: false
    }))
  }

  const handleTextColor2Change = (color: any) => {
    const formattedRGBA = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`
    const { data }: any = state

    data.textColor2 = formattedRGBA

    setState((state: any) => ({
      ...state,
      data: data,
      viewTextColor2Picker: false
    }))
  }

  const handleTextColor3Change = (color: any) => {
    const formattedRGBA = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`
    const { data }: any = state

    data.textColor3 = formattedRGBA

    setState((state: any) => ({
      ...state,
      data: data,
      viewTextColor3Picker: false
    }))
  }

  const { previewBorder } = state
  const { previewMargin } = state
  const { previewPadding } = state
  const modal = useModalState()
  return (
    <div>
      <Box>
        <Accordion
          title={
            <Box display='flex' alignItems='center'>
              <PiechartIcon mr={12} />

              <Text as='h3' fontWeight='bold'>
                Primary Colors
              </Text>
            </Box>
          }
        >
          <Stack direction='row' spacing='xl'>
            {Object.keys(primary).map((key) => (
              <Box backgroundColor='light.900'>
                <Modal.Trigger as={Box} {...modal}>
                  <Shape
                    width='50px'
                    height='50px'
                    shape='circle'
                    onClick={showColorPicker}
                    backgroundColor={primary[key]}
                  />
                </Modal.Trigger>
              </Box>
            ))}
            <Modal {...modal} size={'sm'} ariaLabel='size example'>
              <Modal.Content>
                <SketchPicker
                  onChangeComplete={(data) => {
                    console.log('data: ', data)
                  }}
                />
              </Modal.Content>
            </Modal>

            {/* {state.viewColor1Picker && (
              <SketchPicker onChangeComplete={handlePrimaryColor1Change} />
            )}
            <InputText
              type='text'
              name='text'
              id='primaryColor1'
              value={state.data.primaryColor1 || ''}
              onChange={handleChange}
            />

            <img
              alt='dummy alt'
              src='/images/color-wheel.png'
              height='20px'
              onClick={() => showColorPicker('viewColor2Picker')}
            />
            {state.viewColor2Picker && (
              <SketchPicker onChangeComplete={handlePrimaryColor2Change} />
            )}
            <InputText
              type='text'
              name='text'
              id='primaryColor2'
              value={state.data.primaryColor2 || ''}
              onChange={handleChange}
            />

            <img
              alt='dummy alt'
              src='/images/color-wheel.png'
              height='20px'
              onClick={() => showColorPicker('viewColor3Picker')}
            />
            {state.viewColor3Picker && (
              <SketchPicker onChangeComplete={handlePrimaryColor3Change} />
            )}
            <InputText
              type='text'
              name='text'
              id='primaryColor3'
              value={state.data.primaryColor3 || ''}
              onChange={handleChange}
            />

            <img
              alt='dummy alt'
              src='/images/color-wheel.png'
              height='20px'
              onClick={() => showColorPicker('viewColor4Picker')}
            />
            {state.viewColor4Picker && (
              <SketchPicker onChangeComplete={handlePrimaryColor4Change} />
            )}
            <InputText
              type='text'
              name='text'
              id='primaryColor4'
              value={state.data.primaryColor4 || ''}
              onChange={handleChange}
            />

            <img
              alt='dummy alt'
              src='/images/color-wheel.png'
              height='20px'
              onClick={() => showColorPicker('viewColor5Picker')}
            />
            {state.viewColor5Picker && (
              <SketchPicker onChangeComplete={handlePrimaryColor5Change} />
            )}
            <InputText
              type='text'
              name='text'
              id='primaryColor5'
              value={state.data.primaryColor5 || ''}
              onChange={handleChange}
            /> */}
          </Stack>
        </Accordion>
        <Accordion
          title={
            <Box display='flex' alignItems='center'>
              {/* <Box pr={12}> */}
              <PiechartIcon mr={12} />
              {/* </Box> */}
              <Text as='h3' fontWeight='bold'>
                View Spacing
              </Text>
            </Box>
          }
        >
          <Button color='primary' onClick={resetPreview}>
            <ResetIcon mr={8} size='sm' />
            Reset Preview
          </Button>
          <Stack direction='row' spacing='xl'>
            <Box>
              <Text as='h3' fontWeight='bold'>
                Margin Settings
              </Text>
              <Card style={{ margin: previewMargin }}>
                <Text as='h5' fontWeight='bold'>
                  {previewMargin}
                </Text>
              </Card>
            </Box>
            <Box>
              <Text as='h3' fontWeight='bold'>
                Border Settings
              </Text>
              <Card style={{ border: previewBorder }}>
                <Text as='h5' fontWeight='bold'>
                  {previewBorder}
                </Text>
              </Card>
            </Box>
            <Box>
              <Text as='h3' fontWeight='bold'>
                Padding Settings
              </Text>
              <Card style={{ padding: previewMargin }}>
                <Text as='h5' fontWeight='bold'>
                  {previewPadding}
                </Text>
              </Card>
            </Box>
          </Stack>

          <Card>
            <Stack direction='row' spacing='xl'>
              <Hint variant='info'>
                <SettingsIcon onClick={() => setPreviewMargin('marginLarge')} />
                <InputText
                  type='text'
                  name='text'
                  id='marginLarge'
                  value={state.data.marginLarge || ''}
                  onChange={handleChange}
                />
              </Hint>
              <Hint variant='info'>
                <SettingsIcon
                  onClick={() => setPreviewMargin('marginMedium')}
                />
                <InputText
                  type='text'
                  name='text'
                  id='marginMedium'
                  value={state.data.marginMedium || ''}
                  onChange={handleChange}
                />
              </Hint>
              <Hint variant='info'>
                <SettingsIcon onClick={() => setPreviewMargin('marginSmall')} />
                <InputText
                  type='text'
                  name='text'
                  id='marginSmall'
                  value={state.data.marginSmall || ''}
                  onChange={handleChange}
                />
              </Hint>
              <Hint variant='info'>
                <SettingsIcon
                  onClick={() => setPreviewPadding('paddingLarge')}
                />
                <InputText
                  type='text'
                  name='text'
                  id='paddingLarge'
                  value={state.data.paddingLarge || ''}
                  onChange={handleChange}
                />
              </Hint>

              <Hint variant='info'>
                <SettingsIcon
                  onClick={() => setPreviewPadding('paddingMedium')}
                />
                <InputText
                  type='text'
                  name='text'
                  id='paddingMedium'
                  value={state.data.paddingMedium || ''}
                  onChange={handleChange}
                />
              </Hint>
              <Hint variant='info'></Hint>
              <Hint variant='info'>
                <SettingsIcon
                  onClick={() => setPreviewPadding('paddingSmall')}
                />
                <InputText
                  type='text'
                  name='text'
                  id='paddingSmall'
                  value={state.data.paddingSmall || ''}
                  onChange={handleChange}
                />
              </Hint>
            </Stack>
          </Card>
        </Accordion>
        <Accordion
          title={
            <Box display='flex' alignItems='center'>
              {/* <Box pr={12}> */}
              <PiechartIcon mr={12} />
              {/* </Box> */}
              <Text as='h3' fontWeight='bold'>
                View Borders
              </Text>
            </Box>
          }
        >
          <Card>
            <Text as='h4' fontWeight='bold'>
              The border property can have from one to four values style, width,
              color and radius. See examples below.
            </Text>
            <Stack p={16}>
              <Box>
                <span>dotted</span>
                <div
                  style={{
                    border: '1px dashed red',
                    borderRadius: '5px',
                    width: '200px',
                    height: '25px'
                  }}
                />
                <h5>Code:</h5>
                <h6>border-width: 1px</h6>
                <h6>border-style: dashed</h6>
                <h6>border-color: black</h6>
                <h6>border-radius: 5px</h6>
              </Box>
              <Box>
                <span>solid</span>
                <div
                  style={{
                    border: '3px solid black',
                    width: '200px',
                    height: '25px'
                  }}
                />
                <Text as='h5' fontWeight='bold'>
                  Code:
                </Text>
                <Text>border-width: 3px</Text>
                <Text>border-style: solid</Text>
                <Text>border-color: black</Text>
              </Box>
            </Stack>
            <Stack>
              <span>Border Style 1</span>
              <SettingsIcon onClick={() => setPreviewBorder('border1Width')} />

              <InputText
                type='text'
                name='text'
                id='border1Width'
                placeholder='width'
                value={state.data.border1Width || ''}
                onChange={handleChange}
              />
              <InputText
                type='text'
                name='text'
                id='border1Style'
                placeholder='style'
                value={state.data.border1Style || ''}
                onChange={handleChange}
              />
              <InputText
                type='text'
                name='text'
                id='border1Color'
                placeholder='color'
                value={state.data.border1Color || ''}
                onChange={handleChange}
              />
              <InputText
                type='text'
                name='text'
                id='border1Radius'
                placeholder='radius'
                value={state.data.border1Radius || ''}
                onChange={handleChange}
              />

              <span>Border Style 2</span>
              <SettingsIcon onClick={() => setPreviewBorder('border2Width')} />

              <InputText
                type='text'
                name='text'
                id='border2Width'
                placeholder='width'
                value={state.data.border2Width || ''}
                onChange={handleChange}
              />
              <InputText
                type='text'
                name='text'
                id='border2Style'
                placeholder='style'
                value={state.data.border2Style || ''}
                onChange={handleChange}
              />
              <InputText
                type='text'
                name='text'
                id='border2Color'
                placeholder='color'
                value={state.data.border2Color || ''}
                onChange={handleChange}
              />
              <InputText
                type='text'
                name='text'
                id='border2Radius'
                placeholder='radius'
                value={state.data.border2Radius || ''}
                onChange={handleChange}
              />

              <span>Border Style 3</span>
              <SettingsIcon onClick={() => setPreviewBorder('border3Width')} />

              <InputText
                type='text'
                name='text'
                id='border3Width'
                placeholder='width'
                value={state.data.border3Width || ''}
                onChange={handleChange}
              />
              <InputText
                type='text'
                name='text'
                id='border3Style'
                placeholder='style'
                value={state.data.border3Style || ''}
                onChange={handleChange}
              />
              <InputText
                type='text'
                name='text'
                id='border3Color'
                placeholder='color'
                value={state.data.border3Color || ''}
                onChange={handleChange}
              />
              <InputText
                type='text'
                name='text'
                id='border3Radius'
                placeholder='radius'
                value={state.data.border3Radius || ''}
                onChange={handleChange}
              />
            </Stack>
          </Card>
        </Accordion>

        <Accordion
          title={
            <Box display='flex' alignItems='center'>
              {/* <Box pr={12}> */}
              <PiechartIcon mr={12} />
              {/* </Box> */}
              <Text as='h3' fontWeight='bold'>
                Typography
              </Text>
            </Box>
          }
        >
          <Card>
            <Stack>
              <InputText
                type='text'
                name='text'
                id='heading1FontFamily'
                value={state.data.heading1FontFamily || ''}
                onChange={handleChange}
              />

              <InputText
                type='text'
                name='text'
                id='heading2FontFamily'
                value={state.data.heading2FontFamily || ''}
                onChange={handleChange}
              />

              <InputText
                type='text'
                name='text'
                id='heading3FontFamily'
                value={state.data.heading3FontFamily || ''}
                onChange={handleChange}
              />
              <hr />

              <InputText
                type='text'
                name='text'
                id='heading1FontSize'
                value={state.data.heading1FontSize || ''}
                onChange={handleChange}
              />

              <InputText
                type='text'
                name='text'
                id='heading2FontSize'
                value={state.data.heading2FontSize || ''}
                onChange={handleChange}
              />

              <InputText
                type='text'
                name='text'
                id='heading3FontSize'
                value={state.data.heading3FontSize || ''}
                onChange={handleChange}
              />
              <hr />

              {/* <img
                alt='dummy alt'
                src='/images/color-wheel.png'
                height='20px'
                onClick={() => showColorPicker('viewTextColor1Picker')}
              />
              {state.viewTextColor1Picker && (
                <SketchPicker onChangeComplete={handleTextColor1Change} />
              )}
              <InputText
                type='text'
                name='text'
                id='textColor1'
                value={state.data.textColor1 || ''}
                onChange={handleChange}
              />

              <img
                alt='dummy alt'
                src='/images/color-wheel.png'
                height='20px'
                onClick={() => showColorPicker('viewTextColor2Picker')}
              />
              {state.viewTextColor2Picker && (
                <SketchPicker onChangeComplete={handleTextColor2Change} />
              )}
              <InputText
                type='text'
                name='text'
                id='textColor2'
                value={state.data.textColor2 || ''}
                onChange={handleChange}
              />

              <img
                alt='dummy alt'
                src='/images/color-wheel.png'
                height='20px'
                onClick={() => showColorPicker('viewTextColor3Picker')}
              />
              {state.viewTextColor3Picker && (
                <SketchPicker onChangeComplete={handleTextColor3Change} />
              )}
              <InputText
                type='text'
                name='text'
                id='textColor3'
                value={state.data.textColor3 || ''}
                onChange={handleChange}
              /> */}
              <hr />

              <InputText
                type='text'
                name='text'
                id='lineHeightLarge'
                value={state.data.lineHeightLarge || ''}
                onChange={handleChange}
              />

              <InputText
                type='text'
                name='text'
                id='lineHeightMedium'
                value={state.data.lineHeightMedium || ''}
                onChange={handleChange}
              />

              <InputText
                type='text'
                name='text'
                id='lineHeightSmall'
                value={state.data.lineHeightSmall || ''}
                onChange={handleChange}
              />
              <hr />

              <InputText
                type='text'
                name='text'
                id='letterSpacingLarge'
                value={state.data.letterSpacingLarge || ''}
                onChange={handleChange}
              />

              <InputText
                type='text'
                name='text'
                id='letterSpacingMedium'
                value={state.data.letterSpacingMedium || ''}
                onChange={handleChange}
              />

              <InputText
                type='text'
                name='text'
                id='letterSpacingSmall'
                value={state.data.letterSpacingSmall || ''}
                onChange={handleChange}
              />
            </Stack>
          </Card>
        </Accordion>
      </Box>
      <Button color='primary' type='submit' onClick={handleSubmit}>
        Save
      </Button>
    </div>
  )
}
