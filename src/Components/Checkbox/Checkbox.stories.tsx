import * as React from 'react'
import { Checkbox } from './Checkbox'
import { Form } from '../Form'
import { ConnectedField } from '../ConnectedField'
import { FieldGroup } from '../FieldGroup'

export default { title: 'Form Elements|Checkbox' }

export const CheckboxFirstStory = () => (
  <Form initialValues={{ vue: true }}>
    <FieldGroup label='Check the frameworks you have already worked with'>
      <ConnectedField component={Checkbox} name='react' label='React' />
      <ConnectedField
        component={Checkbox}
        label='Angular'
        name='angular'
        id='angular_custom_id'
      />
      <ConnectedField component={Checkbox} name='vue' label='Vue' />
    </FieldGroup>
  </Form>
)
