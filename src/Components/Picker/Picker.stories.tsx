import * as React from 'react'
import { Picker } from './Picker'
import { Shape } from '../Shape'
import { ConnectedField } from '../ConnectedField'
import { Form } from '../Form'
import { TwitterIcon, PencilIcon, EditIcon } from '../Icon'

console.log('Form: ', Form)

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

export default { title: 'Form Elements|Picker', Picker }

export const Example = () => {
  return (
    <Form initialValues={{}}>
      <ConnectedField
        component={Picker}
        options={[
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
            element: ({ selected }) => (
              <Shape
                shape='circle'
                width={30}
                backgroundColor={selected ? 'nude.200' : 'unset'}
              >
                <PencilIcon color='dark.900' />
              </Shape>
            ),
            value: 'pencil'
          }
        ]}
        name='icon'
        label='Icons'
        required
      />
    </Form>
  )
}
