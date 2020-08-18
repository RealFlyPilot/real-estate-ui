import * as React from 'react'
import { icons } from './Icon'
import { Box } from '../Box'
import { Stack } from '../Stack'
import { Text } from '../Text'

export default { title: 'Components|Icons' }

export const AllIcons = () => {
  const iconArray = Object.keys(icons).map((key) => ({
    name: key,
    Component: icons[key]
  }))
  return (
    <Stack direction='row' spacing='xl' flexWrap='wrap'>
      {iconArray.map(({ name, Component }) => (
        <Stack
          m={16}
          direction='column'
          alignItems='center'
          alignContent='center'
        >
          <Box p={8}>
            <Component />
          </Box>
          <Text as='h4'>{name}</Text>
        </Stack>
      ))}
    </Stack>
  )
}
