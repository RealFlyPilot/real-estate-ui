import * as React from 'react'

import { Field as BaseField } from '@welcome-ui/field'

export interface FieldProps {}

export const Field: React.SFC<FieldProps> = (props) => {
  return <BaseField {...props} />
}
