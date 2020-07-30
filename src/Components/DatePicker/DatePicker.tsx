import * as React from 'react'

import { DatePicker as BaseDatePicker } from '@welcome-ui/date-picker'

export interface DatePickerProps {}

export const DatePicker: React.SFC<DatePickerProps> = (props) => {
  return <BaseDatePicker {...props} />
}
