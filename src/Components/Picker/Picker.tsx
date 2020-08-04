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
