import * as React from 'react'
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

import SpacingExample from './spacing-example.png'

export interface CustomizeThemeSpacingProps {
  space: T_ThemeSpacing
  updateThemeSpacing: Function
}

export const CustomizeThemeSpacing: React.SFC<CustomizeThemeSpacingProps> = React.forwardRef(
  ({ space, updateThemeSpacing }) => {
    const [spacing, setSpacing] = React.useState(space)

    const editSpacing = ({ target }) => {
      const { value, name } = target
      setSpacing((spacing) => ({
        ...spacing,
        [name]: value
      }))
    }

    React.useEffect(() => {
      if (spacing) {
        updateThemeSpacing(spacing)
      }
    }, [spacing])

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
        <Box>
          <Stack direction='row' spacing='xl'>
            <Box>
              <Text variant='h3'>Keep density consistent</Text>
              <Text>
                Keep consistent density to preserve a unified and balanced
                component look.
              </Text>
            </Box>
            <Box>
              <Shape width='300px' height='300px'>
                <img src={SpacingExample} />
              </Shape>
            </Box>
          </Stack>
        </Box>
        <Box ml={80}>
          <Form initialValues={{ ...space }}>
            <Stack direction='row' spacing='xl'>
              {Object.keys(space).map((key) => (
                <ConnectedField
                  component={InputText}
                  flexDirection='row'
                  label={<Tag variant='info'>{key}</Tag>}
                  name={key}
                  value={spacing[key]}
                  onChange={editSpacing}
                />
              ))}
            </Stack>
          </Form>
        </Box>
      </Accordion>
    )
  }
)
