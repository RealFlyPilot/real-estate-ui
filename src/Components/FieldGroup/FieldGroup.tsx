import * as React from 'react'

import { FieldGroup as BaseFieldGroup } from '@welcome-ui/field-group'

export interface FieldGroupProps {
  children?: any
  label?: string
  required?: boolean
}

export const FieldGroup: React.SFC<FieldGroupProps> = (props) => {
  return <BaseFieldGroup {...props} />
}
