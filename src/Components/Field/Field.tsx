import * as React from 'react'

import { Field as BaseField } from '@welcome-ui/field'

export interface FieldProps {
  checked?: boolean
  children?: any
  component?: any
  connected?: boolean
  disabled?: boolean
  disabledIcon?: Node
  error?: string
  flexDirection?: string
  hint?: string
  id?: string
  label?: string
  modified?: boolean
  name: string
  onChange: Function
  onClick?: Function
  pristine?: boolean
  required?: boolean
  size?: string
  touched?: boolean
  type?: string
  warning?: string
}

export const Field: React.SFC<FieldProps> = (props) => {
  return <BaseField {...props} />
}
