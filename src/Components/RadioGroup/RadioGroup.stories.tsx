import * as React from 'react'
import { RadioGroup } from './RadioGroup'
import { Form } from '../Form'
import { Button } from '../Button'
import { ConnectedField } from '../ConnectedField'

export default { title: 'Form Elements|RadioGroup' }

export const RadioGroupFirstStory = () => {
  return (
    <Form
      initialValues={{}}
      validate={(values) =>
        !values.social ? { social: 'You must choose a social network' } : {}
      }
    >
      <ConnectedField
        component={RadioGroup}
        flexDirection='row'
        hint='Most popular is Twitter'
        label='Social networks'
        mb='xl'
        name='social'
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
        required
      />
      <Button type='submit'>Submit</Button>
    </Form>
  )
}
