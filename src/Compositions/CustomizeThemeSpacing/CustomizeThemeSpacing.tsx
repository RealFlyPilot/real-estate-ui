import React, { useState } from 'react'
import { T_ThemeSpacing } from '../../Theme/theme.types'
import { Box } from '../../Components/Box'
import { Stack } from '../../Components/Stack'
import { Text } from '../../Components/Text'
import { Accordion } from '../../Components/Accordion'
import { MansanoryIcon } from '../../Components/Icon'
import { ConnectedField } from '../../Components/ConnectedField'
import { Tag } from '../../Components/Tag'
import { Form } from '../../Components/Form'
import { InputText } from '../../Components/InputText'
import { Shape } from '../../Components/Shape'

import { Toggle } from '../../Components/Toggle'
import { convertRemsToPixels, convertPixelsToRem } from '../../Utils'
import { Button } from '../../Components/Button'

export interface CustomizeThemeSpacingProps {
  space: T_ThemeSpacing
  updateThemeSpacing: Function
}

export const CustomizeThemeSpacing: React.SFC<CustomizeThemeSpacingProps> = React.forwardRef(
  ({ space, updateThemeSpacing }) => {
    const [spacing, setSpacing] = useState(space)

    const [usePixels, setUsePixels] = useState(false)

    const togglePixels = () => setUsePixels((usePixels) => !usePixels)
    const editSpacing = ({ target }) => {
      const { value, name } = target

      const remVal = !isNaN(convertPixelsToRem(value))
        ? convertPixelsToRem(value)
        : value

      const newSpacingValue = `${usePixels ? remVal : value}`

      setSpacing((spacing) => ({
        ...spacing,
        [name]: newSpacingValue
      }))
    }

    const saveSettings = () => {
      updateThemeSpacing(spacing)
    }

    return (
      <Accordion
        title={
          <Box display='flex' alignItems='center'>
            <MansanoryIcon mr={12} />
            <Text as='h3' fontWeight='bold'>
              Theme Spacing
            </Text>
          </Box>
        }
      >
        <Box mb={'4xl'}>
          <Stack direction='column' spacing='xl'>
            <Box>
              <Text variant='h3'>Keep density consistent</Text>
              <Stack
                direction='row'
                spacing='xl'
                alignItems='center'
                alignContent='center'
              >
                <Toggle mr={'lg'} checked={usePixels} onClick={togglePixels} />
                <Text>Convert to pixels</Text>
                <Button variant='primary' onClick={saveSettings}>
                  Save
                </Button>
              </Stack>
              <Text>
                Keep consistent density to preserve a unified and balanced
                component look.
              </Text>
            </Box>

            <Form initialValues={{ ...space }}>
              <Stack direction='row' spacing='xl'>
                {Object.keys(space).map((key) => (
                  <ConnectedField
                    component={InputText}
                    flexDirection='row'
                    label={<Tag variant='info'>{key}</Tag>}
                    name={key}
                    value={
                      usePixels
                        ? `${
                            !isNaN(convertRemsToPixels(spacing[key]))
                              ? convertRemsToPixels(spacing[key])
                              : ''
                          }px`
                        : spacing[key]
                    }
                    onChange={editSpacing}
                  />
                ))}
              </Stack>
            </Form>
          </Stack>
        </Box>
      </Accordion>
    )
  }
)
