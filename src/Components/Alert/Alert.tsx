import * as React from 'react'
import { BaseComponentStylePropType } from '../../types/base.types'
import { Alert as BaseAlert } from '@welcome-ui/alert'

// Having issues with this component as it also exports Alert.Title
export interface AlertProps extends BaseComponentStylePropType {
  variant?: string
}

export const Alert: React.SFC<AlertProps> = (props) => {
  return <BaseAlert {...props} />
}
