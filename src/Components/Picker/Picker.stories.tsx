import * as React from 'react'
import { Picker } from './Picker'
import { Shape } from '../Shape'
import { icons } from '../Icon'
import { Form } from '../Form'
import { Formik, Field } from 'formik'

const { TwitterIcon, PencilIcon, EditIcon } = icons

const options = [
  {
    element: ({ selected }) => (
      <Shape
        shape='circle'
        width={30}
        backgroundColor={selected ? 'nude.200' : 'unset'}
      >
        <EditIcon color='dark.900' />
      </Shape>
    ),
    value: 'edit'
  },
  {
    element: ({ selected }) => (
      <Shape
        shape='circle'
        width={30}
        backgroundColor={selected ? 'nude.200' : 'unset'}
      >
        <TwitterIcon color='dark.900' />
      </Shape>
    ),
    value: 'twitter'
  },
  {
    element: ({ selected }) => {
      console.log('selected: ', selected)
      return (
        <Shape
          shape='circle'
          width={30}
          backgroundColor={selected ? 'nude.200' : 'unset'}
        >
          <PencilIcon color='dark.900' />
        </Shape>
      )
    },
    value: 'pencil'
  }
]

export default { title: 'Picker', Picker }

export const Example = () => {
  return (
    <Formik
      initialValues={{}}
      onSubmit={(values, actions) => {
        console.log('actions: ', actions)
        console.log('values: ', values)
      }}
    >
      {({ values }) => (
        <Form>
          <Field options={options} component={Picker} />
        </Form>
      )}
    </Formik>
  )
}
