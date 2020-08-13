import * as React from 'react'
import { T_BaseComponentStyleProps } from '../component.types'
import { InputText as BaseInputText } from '@welcome-ui/input-text'

export interface InputTextProps extends T_BaseComponentStyleProps {
  type?: string
  name?: string
  placeholder?: string
  id?: string
  value?: string
  onChange?: Function
}

export const InputText: React.SFC<InputTextProps> = (props) => {
  return <BaseInputText {...props} />
}
