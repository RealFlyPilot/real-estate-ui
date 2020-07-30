import * as React from 'react'

import { FileDrop as BaseFileDrop } from '@welcome-ui/file-drop'

export interface FileDropProps {}

export const FileDrop: React.SFC<FileDropProps> = (props) => {
  return <BaseFileDrop {...props} />
}
