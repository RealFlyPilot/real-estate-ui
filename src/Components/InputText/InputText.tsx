import * as React from 'react'

import { InputText as BaseInputText } from '@welcome-ui/input-text'

export interface InputTextProps {}

export const InputText: React.SFC<InputTextProps> = (props) => {
  return <BaseInputText {...props} />
}
