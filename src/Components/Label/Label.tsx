import * as React from 'react'
import { T_BaseComponentStyleProps } from '../component.types'
import { Label as BaseLabel } from '@welcome-ui/label'

export interface LabelProps extends T_BaseComponentStyleProps {
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
