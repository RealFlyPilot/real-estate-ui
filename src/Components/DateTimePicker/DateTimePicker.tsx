import * as React from 'react'

import { DateTimePicker as BaseDateTimePicker } from '@welcome-ui/date-time-picker'

export interface DateTimePickerProps {}

export const DateTimePicker: React.SFC<DateTimePickerProps> = (props) => {
  return <BaseDateTimePicker {...props} />
}
