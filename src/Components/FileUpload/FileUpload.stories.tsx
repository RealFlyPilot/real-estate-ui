import * as React from 'react'
import { FileUpload } from './FileUpload'
import { Form } from '../../Utils/Form'
import { ConnectedField } from '../ConnectedField'
import { Button } from '../Button'
export default { title: 'Form Elements|FileUpload' }

export const UploadAvatarExample = () => (
  <Form initialValues={{}}>
    <ConnectedField
      component={FileUpload}
      accept='image/*'
      name='avatar'
      label='Avatar'
      hint='Files must be <200MB'
      required
      handleAddFile={console.debug}
      handleRemoveFile={console.debug}
      onError={console.error}
    >
      {({ openFile }) => <Button onClick={openFile}>Upload avatar</Button>}
    </ConnectedField>
  </Form>
)

export const WithInitialValue = () => (
  <Form
    initialValues={{
      file: 'https://doc-exemple/example.docx?v=63731713698'
    }}
  >
    <ConnectedField
      component={FileUpload}
      accept='image/*'
      name='avatar'
      label='Avatar'
      hint='Files must be <200MB'
      required
      handleAddFile={console.debug}
      handleRemoveFile={console.debug}
      onError={console.error}
    >
      {({ openFile }) => <Button onClick={openFile}>Upload avatar</Button>}
    </ConnectedField>
  </Form>
)
