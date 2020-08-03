import * as React from 'react'
import { Group } from './Group'
import { Button } from '../Button'
import { Box } from '../Box'

export default { title: 'Group', component: Group }

export const ButtonGroup = () => (
  <Group>
    <Button>First</Button>
    <Button>Second</Button>
    <Button>Third</Button>
    <Button>Last</Button>
  </Group>
)

export const DrillingPropsDownToChildren = () => (
  <Box>
    overloads the child components properties.
    <br />
    <Group variant='tertiary' size='xs'>
      <Button>First</Button>
      <Button variant='secondary'>Second</Button>
      <Button variant='tertiary'>Third</Button>
      <Button variant='tertiary'>Last</Button>
    </Group>
  </Box>
)
