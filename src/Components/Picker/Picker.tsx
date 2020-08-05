import * as React from 'react'
import { T_BaseComponentStyleProps } from '../component.types'
import { Picker as BasePicker } from '@welcome-ui/picker'

export interface PickerProps extends T_BaseComponentStyleProps {
  name?: string
  label?: string
  required?: boolean
  options?: any
}

export const Picker: React.SFC<PickerProps> = BasePicker
