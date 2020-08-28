import * as React from 'react'
import { T_ThemeColors } from '../../Theme/theme.types'
import { SketchPicker } from 'react-color'
import { useModalState, Modal } from '../../Components/Modal'
import { Shape } from '../../Components/Shape'
import { Accordion } from '../../Components/Accordion'
import { Box } from '../../Components/Box'
import { Stack } from '../../Components/Stack'
import { Text } from '../../Components/Text'
import { Card } from '../../Components/Card'
import { PiechartIcon } from '../../Components/Icon'

export interface CustomizeThemePaletteProps {
  colors: T_ThemeColors
  updateThemePalette: Function
}

export const CustomizeThemePalette: React.SFC<CustomizeThemePaletteProps> = React.forwardRef(
  ({ colors, updateThemePalette }, ref) => {
    const colorPalettes = colors
    const [palette, setPalette] = React.useState(colors)
    const [color, setColor] = React.useState('')
    const [activePalette, setActivePalette]: any = React.useState(null)
    const modal = useModalState()

    const editPalette = (newPaletteHex) => {
      const split = activePalette.split('.')
      const newPalette = Object.assign({}, palette)
      const paletteLevel = split[0]
      const paletteValue = split[1]

      newPalette[paletteLevel][paletteValue] = newPaletteHex

      setPalette(newPalette)
      if (updateThemePalette) updateThemePalette(newPalette)
    }

    return (
      <Accordion
        ref={ref}
        title={
          <Box display='flex' alignItems='center'>
            <PiechartIcon mr={12} />
            <Text as='h3' fontWeight='bold'>
              Theme Palette
            </Text>
          </Box>
        }
      >
        {Object.keys(colorPalettes).map((paletteKey) => {
          const nestedPalette = colorPalettes[paletteKey]

          return (
            <Box>
              <Text as='h3' fontWeight='bold'>
                {paletteKey}
              </Text>

              <Stack direction='row' spacing='xl'>
                {Object.keys(nestedPalette).map((key) => {
                  const nestedPaletteColor = nestedPalette[key]
                  return (
                    <Card p={16}>
                      <Stack alignItems='center' alignContent='center'>
                        <Box backgroundColor='light.900'>
                          <Modal.Trigger as={Box} {...modal}>
                            <Shape
                              width='100px'
                              height='100px'
                              shape='circle'
                              onClick={() => {
                                setColor(nestedPaletteColor)
                                setActivePalette(`${paletteKey}.${key}`)
                              }}
                              backgroundColor={nestedPaletteColor}
                            >
                              <Text color='light.900'>
                                {colorPalettes[paletteKey][key]}
                              </Text>
                            </Shape>
                          </Modal.Trigger>
                        </Box>

                        <Text as='h3' fontWeight='bold'>
                          {key}
                        </Text>
                      </Stack>
                    </Card>
                  )
                })}
              </Stack>
            </Box>
          )
        })}
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
      </Accordion>
    )
  }
)
