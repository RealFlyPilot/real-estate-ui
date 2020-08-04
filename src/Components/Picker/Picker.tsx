import * as React from 'react'
import { BaseComponentStylePropTypes } from '../component.types'
import { Picker as BasePicker } from '@welcome-ui/picker'

export interface PickerProps extends BaseComponentStylePropTypes {
  name?: string
  label?: string
  required?: boolean
  options?: any
}

export const Picker: React.SFC<PickerProps> = BasePicker

// ({
//   name,
//   label,
//   required,
//   options
// }) => {
//   return (
//     <ConnectedField
//       component={BasePicker}
//       options={options}
//       name={name}
//       label={label}
//       required={required}
//     />
//   )
// }
