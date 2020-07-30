import * as React from 'react'

import { Textarea as BaseTextarea } from '@welcome-ui/textarea'

export interface TextareaProps {}

export const Textarea: React.SFC<TextareaProps> = (props) => {
  return <BaseTextarea {...props} />
}
