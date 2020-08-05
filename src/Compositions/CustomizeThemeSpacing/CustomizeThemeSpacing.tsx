import * as React from 'react'
import { T_ThemeColors, T_ThemeSpacing } from '../../Theme/theme.types'
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
  useModalState,
  ConnectedField,
  Tag,
  Form
} from '../../index'

const { PiechartIcon } = icons

export interface CustomizeThemeSpacingProps {
  space: T_ThemeSpacing
}

export const CustomizeThemeSpacing: React.SFC<CustomizeThemeSpacingProps> = React.forwardRef(
  ({ space }) => {
    const [spacing, setSpacing] = React.useState(space)
    // const [activePalette, setActivePalette]: any = React.useState(null)

    const editSpacing = (spacingValue) => {
      console.log('spacingValue: ', spacingValue)
    }

    return (
      <Accordion
        title={
          <Box display='flex' alignItems='center'>
            <PiechartIcon mr={12} />
            <Text as='h3' fontWeight='bold'>
              Theme Spacing
            </Text>
          </Box>
        }
      >
        <Form initialValues={{ ...space }}>
          <Stack direction='row' spacing='xl'>
            {Object.keys(space).map((key) => (
              <ConnectedField
                component={InputText}
                flexDirection='row'
                label={<Tag variant='info'>{key}</Tag>}
                name={key}
                onChange={editSpacing}
              />
            ))}
          </Stack>
        </Form>
      </Accordion>
    )
  }
)
