import * as React from 'react'
import { RadioTab } from './RadioTab'
import { RadioGroup } from '../RadioGroup'
import { Form } from '../Form'
import { ConnectedField } from '../ConnectedField'

export default { title: 'Form Elements|RadioTab' }

export const RadioTabFirstStory = () => (
  <Form initialValues={{ social_1: 'twitter', social_2: 'xing' }}>
    <ConnectedField
      component={RadioGroup}
      flexDirection='row'
      label='Social networks'
      mb='xl'
      name='social_1'
      options={[
        {
          value: 'behance',
          label: 'Behance',
          hint: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          value: 'dribbble',
          label: 'Dribbble',
          hint: 'Aenean a tristique turpis, in elementum est.'
        }
      ]}
      renderOption={RadioTab}
      required
    />
    <ConnectedField
      component={RadioGroup}
      label='Social networks'
      mb='xl'
      name='social_2'
      options={[
        {
          value: 'behance',
          label: 'Behance',
          hint: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          value: 'dribbble',
          label: 'Dribbble',
          hint: 'Aenean a tristique turpis, in elementum est.'
        }
      ]}
      renderOption={RadioTab}
      required
      width={1 / 3}
    />
  </Form>
)
