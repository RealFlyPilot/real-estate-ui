import * as React from 'react'
import { Hint } from './Hint'

export default { title: 'Components|Hint' }

export const HintFirstStory = () => (
  <div>
    <Hint>default</Hint>
    <Hint variant='warning'>warning</Hint>
    <Hint variant='error'>error</Hint>
    <Hint variant='info'>info</Hint>
    <Hint variant='success'>success</Hint>
  </div>
)
