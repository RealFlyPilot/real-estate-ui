import * as React from 'react'

import { MarkdownEditor as BaseMarkdownEditor } from '@welcome-ui/markdown-editor'

export interface MarkdownEditorProps {}

export const MarkdownEditor: React.SFC<MarkdownEditorProps> = (props) => {
  return <BaseMarkdownEditor {...props} />
}
