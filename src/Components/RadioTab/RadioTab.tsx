import * as React from 'react'

import { RadioTab as BaseRadioTab } from '@welcome-ui/radio-tab'

export interface RadioTabProps {}

export const RadioTab: React.SFC<RadioTabProps> = (props) => {
  return <BaseRadioTab {...props} />
}
