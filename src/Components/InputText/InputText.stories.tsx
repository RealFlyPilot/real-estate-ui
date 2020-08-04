import * as React from 'react'
import { InputText } from './InputText'
import { Form } from '../../Utils/Form'
import { ConnectedField } from '../ConnectedField'

export default { title: 'Form Elements|InputText' }

export const InputTextFirstStory = () => (
  <Form initialValues={{}}>
    <ConnectedField
      name='firstName'
      component={InputText}
      placeholder='Boaty'
      label='First name'
      required
    />
  </Form>
)
