import * as React from 'react'
import { Select } from './Select'
import { Form } from '../Form'
import { ConnectedField } from '../ConnectedField'
import { ITEMS } from '../../Utils/constants'

export default { title: 'Form Elements|Select' }

export const SelectFirstStory = () => (
  <Form initialValues={{}}>
    <ConnectedField
      component={Select}
      options={ITEMS}
      name='welcome'
      label='Social networks'
    />
  </Form>
)
