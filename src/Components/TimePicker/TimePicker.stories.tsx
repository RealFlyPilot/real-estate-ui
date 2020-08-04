import * as React from 'react'
import { TimePicker } from './TimePicker'
import { Form } from '../../Utils/Form'
import { ConnectedField } from '../ConnectedField'
export default { title: 'Form Elements|TimePicker' }

export const TimePickerFirstStory = () => (
  <Form initialValues={{ welcome: Date.now() }}>
    <ConnectedField
      component={TimePicker}
      label='Time'
      name='welcome'
      onChange={(date) => console.log('date: ', date)}
    />
  </Form>
)
