import * as React from 'react'
import { BaseComponentStylePropType } from '../component.types'
import { Label as BaseLabel } from '@welcome-ui/label'

export interface LabelProps extends BaseComponentStylePropType {
  checkableField?: boolean
  children?: any
  variant?: 'warning' | 'error' | 'info' | 'success'
  disabled?: boolean
  disabledIcon?: Node
  icon?: Node
  withDisabledIcon?: boolean
}

export const Label: React.SFC<LabelProps> = ({ children, ...rest }) => {
  return <BaseLabel {...rest}>{children}</BaseLabel>
}
