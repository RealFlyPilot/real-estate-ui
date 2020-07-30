import * as React from 'react'

import { RadioGroup as BaseRadioGroup } from '@welcome-ui/radio-group'

export interface RadioGroupProps {}

export const RadioGroup: React.SFC<RadioGroupProps> = (props) => {
  return <BaseRadioGroup {...props} />
}
