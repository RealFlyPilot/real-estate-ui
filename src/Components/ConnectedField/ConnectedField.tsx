import * as React from 'react'
import { ConnectedField as BaseField } from '@welcome-ui/connected-field'
import { T_BaseComponentStyleProps } from '../component.types'

export interface ConnectedFieldProps extends T_BaseComponentStyleProps {
  component: any
  type?: string
  options?: any
  required?: boolean
  name?: string
  hint?: string
  label?: any
  search?: Function
  itemToString?: Function
  renderItem?: Function
  placeholder?: any
  onChange?: Function
  children?: any
  accept?: any
  handleAddFile?: Function
  handleRemoveFile?: Function
  onError?: Function
  isClearable?: boolean
  isEditable?: boolean
  id?: string
  value?: any
}

export const ConnectedField: React.SFC<ConnectedFieldProps> = (props) => {
  return <BaseField {...props} />
}
