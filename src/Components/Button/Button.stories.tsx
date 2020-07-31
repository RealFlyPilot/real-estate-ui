import * as React from 'react'
import { Button } from './Button'
import { Box } from '../Box'

export default { title: 'Button' }

export const ButtonVariants = () => (
  <Box
    display='flex'
    width={1}
    height='500px'
    justifyContent='space-evenly'
    alignItems='center'
    backgroundColor='nude.100'
  >
    <Button>Primary</Button>
    <Button variant='secondary'>Secondary</Button>
    <Button variant='tertiary'>Tertiary</Button>
    <Box backgroundColor='nude.700' display='inline' px='sm' py='xxl'>
      <Button variant='tertiary-negative'>Tertiary negative</Button>
    </Box>
    <Button variant='quaternary'>Quaternary</Button>
  </Box>
)
