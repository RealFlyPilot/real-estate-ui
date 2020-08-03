import * as React from 'react'
import { Box } from './Box'

export default { title: 'Box' }

export const BasicBoxCentered = () => (
  <Box
    display='flex'
    width={1}
    height='500px'
    justifyContent='center'
    alignItems='center'
    backgroundColor='nude.100'
  >
    <Box
      backgroundColor='light.900'
      borderRadius='sm'
      padding='50px'
      boxShadow='sm'
    >
      Centered Box
    </Box>
  </Box>
)
