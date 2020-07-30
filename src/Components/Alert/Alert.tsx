import * as React from 'react'
import { BaseComponentStylePropType } from '../../types/base.types'
import { Alert as BaseAlert } from '@welcome-ui/alert'

export interface AlertProps extends BaseComponentStylePropType {}

export const Alert: React.SFC<AlertProps> = (props) => {
  return <BaseAlert {...props} />
}
