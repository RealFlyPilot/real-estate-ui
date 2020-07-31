import * as React from 'react'
import { Accordion } from './Accordion'
import { Box } from '../Box'
import { Avatar } from '../Avatar'
import { Text } from '../Text'

export default {
  title: 'Accordion',
  component: Accordion
}

export const SimpleExample = () => (
  <Accordion title={'Accordion Title'}>Some content</Accordion>
)
export const MoreInterestingExample = () => (
  <Accordion
    title={
      <Box display='flex' alignItems='center'>
        <Avatar name='accordion' mr='sm' />
        <Text as='h3' m='0' fontWeight='bold'>
          Accordion title
        </Text>
      </Box>
    }
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.
  </Accordion>
)
