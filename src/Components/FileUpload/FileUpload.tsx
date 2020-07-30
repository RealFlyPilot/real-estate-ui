import * as React from 'react'

import { FileUpload as BaseFileUpload } from '@welcome-ui/file-upload'

export interface FileUploadProps {}

export const FileUpload: React.SFC<FileUploadProps> = (props) => {
  return <BaseFileUpload {...props} />
}
