import * as React from 'react'
import { BaseComponentStylePropType } from '../component.types'
import { Picker as BasePicker } from '@welcome-ui/picker'

export interface PickerProps extends BaseComponentStylePropType {
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
