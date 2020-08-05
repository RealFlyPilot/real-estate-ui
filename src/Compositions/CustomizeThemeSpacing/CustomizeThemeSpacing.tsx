import * as React from 'react'
import { T_ThemeColors, T_ThemeSpacing } from '../../Theme/theme.types'
import {
  InputText,
  Box,
  Stack,
  Shape,
  Text,
  Accordion,
  icons,
  ConnectedField,
  Tag,
  Form
} from '../../index'

import SpacingExample from './spacing-example.png'

const { MansanoryIcon } = icons

export interface CustomizeThemeSpacingProps {
  space: T_ThemeSpacing
}

export const CustomizeThemeSpacing: React.SFC<CustomizeThemeSpacingProps> = React.forwardRef(
  ({ space }) => {
    const [spacing, setSpacing] = React.useState(space)

    const editSpacing = ({ target }) => {
      const { value, name } = target
      setSpacing((spacing) => ({
        ...spacing,
        [name]: value
      }))
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
        <Box>
          <Stack direction='row' spacing='xl'>
            <Box>
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
            </Box>

            <Box ml={80}>
              <Form initialValues={{ ...space }}>
                <Stack spacing='xl'>
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
          </Stack>
        </Box>
      </Accordion>
    )
  }
)
