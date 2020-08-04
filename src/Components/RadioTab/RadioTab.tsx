import * as React from 'react'

import { RadioTab as BaseRadioTab } from '@welcome-ui/radio-tab'

export interface RadioTabProps {
  renderOption?: React.FunctionComponent
}

export const RadioTab: React.SFC<RadioTabProps> = (props) => {
  return <BaseRadioTab {...props} />
}
