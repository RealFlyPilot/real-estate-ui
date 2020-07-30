import * as React from 'react'

import { Select as BaseSelect } from '@welcome-ui/select'

export interface SelectProps {}

export const Select: React.SFC<SelectProps> = (props) => {
  return <BaseSelect {...props} />
}
