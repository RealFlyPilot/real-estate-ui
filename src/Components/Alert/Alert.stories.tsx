import * as React from 'react'
import { Alert } from './Alert'
import { Box } from '../Box'
import { HeartIcon } from '../Icon'

export default { title: 'Components|Alert', component: Alert }

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

export const TitleOnly = () => (
  <Alert>
    <Alert.Title>Welcome to the jungle</Alert.Title>

    <Alert.Button variant='secondary'>Button</Alert.Button>
  </Alert>
)
export const WithButton = () => (
  <Alert>
    <Alert.Title>Welcome to the jungle</Alert.Title>
    <span>
      Nunc laoreet egestas nulla, et dapibus sem malesuada in. Suspendisse
      eleifend accumsan ultrices. Phasellus iaculis nisi sed dui ornare commodo.
      Nullam dapibus varius nibh a ornare.
    </span>
    <Alert.Button variant='secondary'>Button</Alert.Button>
  </Alert>
)

export const WithIcon = () => (
  <div>
    <Alert>
      <Alert.Title>Welcome to the jungle</Alert.Title>
    </Alert>
    <Alert>
      <Alert.Title icon={<HeartIcon />}>Welcome to the jungle</Alert.Title>
    </Alert>
    <Alert>
      <Alert.Title icon='😵'>Welcome to the jungle</Alert.Title>
    </Alert>
    <Alert>
      <Alert.Title icon={null}>Welcome to the jungle</Alert.Title>
    </Alert>
  </div>
)
