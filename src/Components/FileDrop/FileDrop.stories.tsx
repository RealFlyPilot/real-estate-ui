import * as React from 'react'
import { FileDrop } from './FileDrop'
import { Form } from '../Form'
import { ConnectedField } from '../ConnectedField'
export default { title: 'Form Elements|FileDrop' }

export const FileDropFirstStory = () => (
  <Form initialValues={{}}>
    <ConnectedField
      component={FileDrop}
      name='file'
      label='Your file'
      hint='Files must be < 2MB'
      required
      isClearable
      isEditable
      handleAddFile={console.debug}
      handleRemoveFile={console.debug}
    />
  </Form>
)

export const ShowPreviewIfValueExists = () => {
  return (
    <Form
      initialValues={{
        avatar:
          'https://media3.giphy.com/media/uYiJD8fcWDys8/giphy.gif?cid=790b76115d08fb457747437951ff7674&rid=giphy.gif'
      }}
    >
      <ConnectedField
        component={FileDrop}
        hint='Files must be < 2MB'
        isEditable
        isClearable
        label='Avatar'
        name='avatar'
        handleAddFile={console.debug}
        handleRemoveFile={console.debug}
      />
    </Form>
  )
}
