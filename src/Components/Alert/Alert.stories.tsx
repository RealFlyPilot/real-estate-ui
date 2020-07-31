import * as React from 'react'
import { Alert } from './Alert'
import { Box } from '../Box'

export default { title: 'Alert' }

export const AlertFirstStory = () => <Alert />

export const Examples = () => (
  <Box>
    <Alert>
      <span>
        Nunc laoreet egestas nulla, et dapibus sem malesuada in. Suspendisse
        eleifend accumsan ultrices. Phasellus iaculis nisi sed dui ornare
        commodo. Nullam dapibus varius nibh a ornare.
      </span>
    </Alert>
    <Alert variant='warning'>
      <span>
        Nunc laoreet egestas nulla, et dapibus sem malesuada in. Suspendisse
        eleifend accumsan ultrices. Phasellus iaculis nisi sed dui ornare
        commodo. Nullam dapibus varius nibh a ornare.
      </span>
    </Alert>
    <Alert variant='success'>
      <span>
        Nunc laoreet egestas nulla, et dapibus sem malesuada in. Suspendisse
        eleifend accumsan ultrices. Phasellus iaculis nisi sed dui ornare
        commodo. Nullam dapibus varius nibh a ornare.
      </span>
    </Alert>
    <Alert variant='info'>
      <span>
        Nunc laoreet egestas nulla, et dapibus sem malesuada in. Suspendisse
        eleifend accumsan ultrices. Phasellus iaculis nisi sed dui ornare
        commodo. Nullam dapibus varius nibh a ornare.
      </span>
    </Alert>
  </Box>
)
