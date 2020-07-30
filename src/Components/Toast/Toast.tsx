import * as React from 'react'

import { Toast as BaseToast } from '@welcome-ui/toast'

export interface ToastProps {}

export const Toast: React.SFC<ToastProps> = (props) => {
  return <BaseToast {...props} />
}
