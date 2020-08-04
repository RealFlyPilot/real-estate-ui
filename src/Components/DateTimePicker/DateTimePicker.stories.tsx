import * as React from 'react'
import { DateTimePicker } from './DateTimePicker'
import { Form } from '../../Utils/Form'
import { ConnectedField } from '../ConnectedField'

export default { title: 'Form Elements|DateTimePicker' }

export const DateTimePickerFirstStory = () => (
  <Form initialValues={{ welcome: Date.now() }}>
    <ConnectedField component={DateTimePicker} label='Date' name='welcome' />
  </Form>
)
