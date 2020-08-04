import * as React from 'react'
import { Label } from './Label'

export default { title: 'Components|Label', component: Label }

export const LabelFirstStory = () => (
  <div>
    <Label variant='warning'>Warning variant</Label>
    <Label variant='error'>Error variant</Label>
    <Label variant='info'>Info variant</Label>
    <Label variant='success'>Success variant</Label>
    <Label icon='🐶'>Custom icon</Label>
  </div>
)
