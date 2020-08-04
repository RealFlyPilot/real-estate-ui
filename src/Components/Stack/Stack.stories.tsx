import * as React from 'react'
import { Stack } from './Stack'

export default { title: 'Stack' }

export const VerticalStack = () => (
  <Stack>
    <div>Foo</div>
    <div>Bar</div>
    <div>Baz</div>
  </Stack>
)

export const StackWithSpacing = () => (
  <Stack direction='row' spacing='xl'>
    <div>Foo</div>
    <div>Bar</div>
    <div>Baz</div>
  </Stack>
)

export const StackAsAnotherElement = () => (
  <Stack as='ul'>
    <div>Foo</div>
    <div>Bar</div>
    <div>Baz</div>
  </Stack>
)
