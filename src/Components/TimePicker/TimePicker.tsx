import * as React from 'react'

import { TimePicker as BaseTimePicker } from '@welcome-ui/time-picker'

export interface TimePickerProps {}

export const TimePicker: React.SFC<TimePickerProps> = (props) => {
  return <BaseTimePicker {...props} />
}
