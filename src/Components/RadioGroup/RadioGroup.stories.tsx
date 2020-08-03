import * as React from 'react'
import { RadioGroup } from './RadioGroup'
import { Form, ConnectedField } from '../Form'
import { Button } from '../Button'
import { Formik, Field } from 'formik'
export default { title: 'RadioGroup' }

export const RadioGroupFirstStory = () => {
  return (
    <Formik
      initialValues={{
        social: null
      }}
      onSubmit={(values, actions) => {
        console.log('actions: ', actions)
        console.log('values: ', values)
      }}
    >
      {({ values }) => (
        <Form
          validate={(values) =>
            !values.social ? { social: 'You must choose a social network' } : {}
          }
        >
          <ConnectedField
            component={RadioGroup}
            flexDirection='row'
            mb='xl'
            name='social'
            maxWidth={{ md: 0.3 }}
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
      )}
    </Formik>
  )
}
