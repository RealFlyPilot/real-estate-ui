import * as React from 'react'
import { T_ThemeColors } from '../../Theme/theme.types'
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
} from '../../index'
import { SketchPicker } from 'react-color'

const { PiechartIcon, ResetIcon, SettingsIcon } = icons

export interface CustomizeThemePaletteProps {
  colors: T_ThemeColors
  updateThemePalette: Function
}

export const CustomizeThemePalette: React.SFC<CustomizeThemePaletteProps> = React.forwardRef(
  ({ colors, updateThemePalette }) => {
    const { primary, light } = colors

    const [palette, setPalette] = React.useState(colors)
    const [color, setColor] = React.useState('')
    const [activePalette, setActivePalette]: any = React.useState(null)
    const modal = useModalState()

    const editPalette = (newPaletteHex) => {
      const split = activePalette.split('.')
      const paletteLevel = split[0]
      const paletteValue = split[1]

      const newPalette = Object.assign({}, palette)
      newPalette[paletteLevel][paletteValue] = newPaletteHex

      setPalette(newPalette)
      if (updateThemePalette) updateThemePalette(newPalette)
    }

    return (
      <Accordion
        title={
          <Box display='flex' alignItems='center'>
            <PiechartIcon mr={12} />
            <Text as='h3' fontWeight='bold'>
              Theme Palette
            </Text>
          </Box>
        }
      >
        <Stack direction='row' spacing='xl'>
          {Object.keys(primary).map((key) => (
            <Box backgroundColor='light.900'>
              <Modal.Trigger as={Box} {...modal}>
                <Shape
                  width='100px'
                  height='100px'
                  shape='circle'
                  onClick={() => setActivePalette(`primary.${key}`)}
                  backgroundColor={primary[key]}
                >
                  <Text color='light.900'>{primary[key]}</Text>
                </Shape>
              </Modal.Trigger>
            </Box>
          ))}
          <Modal {...modal} size={'sm'} ariaLabel='size example'>
            <Modal.Content>
              <SketchPicker
                color={color}
                onChangeComplete={(data) => {
                  const { hex } = data
                  setColor(hex)
                  editPalette(hex)
                }}
              />
            </Modal.Content>
          </Modal>
        </Stack>
      </Accordion>
    )
  }
)
