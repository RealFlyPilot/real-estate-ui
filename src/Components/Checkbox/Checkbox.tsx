import * as React from 'react'

import { Checkbox as BaseCheckbox } from '@welcome-ui/checkbox'

export interface CheckboxProps {}

export const Checkbox: React.SFC<CheckboxProps> = (props) => {
  return <BaseCheckbox {...props} />
}
