import React, { useState } from 'react'
import { T_ThemeSpacing } from '../../Theme/theme.types'
import { Box } from '../../Components/Box'
import { Stack } from '../../Components/Stack'
import { Text } from '../../Components/Text'
import { Accordion } from '../../Components/Accordion'
import { MansanoryIcon } from '../../Components/Icon'
import { Tag } from '../../Components/Tag'
import { InputText } from '../../Components/InputText'
import { Toggle } from '../../Components/Toggle'
import { convertRemsToPixels, convertPixelsToRem } from '../../Utils'
import { Button } from '../../Components/Button'
import { useForm } from '../../Components/Form'

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

    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
      updateThemeSpacing(data)
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack direction='column' spacing='xl'>
              <Box>
                <Text variant='h3'>Keep density consistent</Text>
                <Stack
                  direction='row'
                  spacing='xl'
                  alignItems='center'
                  alignContent='center'
                >
                  <Toggle
                    mr={'lg'}
                    checked={usePixels}
                    onClick={togglePixels}
                  />
                  <Text>Convert to pixels</Text>
                  <Button variant='primary' type='submit'>
                    Save
                  </Button>
                </Stack>
                <Text>
                  Keep consistent density to preserve a unified and balanced
                  component look.
                </Text>
              </Box>

              <Stack direction='row' spacing='xl' flexWrap='wrap'>
                {Object.keys(space).map((key) => (
                  <Stack direction='row' m={16}>
                    <Box width={45}>
                      <Tag
                        minHeight={40}
                        variant='info'
                        m={0}
                        mr={0}
                        width={45}
                      >
                        {key}
                      </Tag>
                    </Box>
                    <InputText
                      display='inline'
                      minWidth='max-content'
                      name={key}
                      ref={register}
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
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </form>
        </Box>
      </Accordion>
    )
  }
)
