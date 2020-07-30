import * as React from 'react'

import { Picker as BasePicker } from '@welcome-ui/picker'

export interface PickerProps {}

export const Picker: React.SFC<PickerProps> = (props) => {
  return <BasePicker {...props} />
}
