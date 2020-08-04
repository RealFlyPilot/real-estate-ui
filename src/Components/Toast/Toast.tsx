import * as React from 'react'
import { Toast as BaseToast, useToast } from '@welcome-ui/toast'

export interface ToastProps {}

const Toast: React.SFC<ToastProps> = BaseToast

export { useToast, Toast }
