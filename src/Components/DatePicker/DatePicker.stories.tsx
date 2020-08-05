import * as React from 'react'
import { DatePicker } from './DatePicker'
import { Form } from '../Form'
import { ConnectedField } from '../ConnectedField'
export default { title: 'Form Elements|DatePicker' }

export const DatePickerFirstStory = () => (
  <Form initialValues={{ welcome: Date.now() }}>
    <ConnectedField component={DatePicker} label='Date' name='welcome' />
  </Form>
)
