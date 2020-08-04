import * as React from 'react'
import { Textarea } from './Textarea'
import { Form } from '../../Utils/Form'
import { ConnectedField } from '../ConnectedField'

export default { title: 'Form Elements|Textarea' }

export const TextareaFirstStory = () => (
  <Form initialValues={{}}>
    <ConnectedField
      name='textarea'
      component={Textarea}
      label='Description'
      hint='Description must be <200 words'
      required
    />
  </Form>
)
