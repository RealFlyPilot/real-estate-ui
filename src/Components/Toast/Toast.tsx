import * as React from 'react'
import { Toast as BaseToast, useToast } from '@welcome-ui/toast'
import { BaseComponentStylePropType } from '../component.types'

export interface ToastProps extends BaseComponentStylePropType {
  children: any
  style?: any
  variant?: string
  icon?: any
  onClick?: Function
  size?: string
}

export interface ToastInterface extends React.SFC<ToastProps> {
  Snackbar: React.SFC<ToastProps>
  Growl: React.SFC<ToastProps>
  Title?: React.SFC<ToastProps>
}
const Toast: ToastInterface = (props) => <BaseToast {...props} />

Toast.Snackbar = BaseToast.Snackbar
Toast.Growl = BaseToast.Growl
Toast.Title = BaseToast.Title

export { useToast, Toast }
