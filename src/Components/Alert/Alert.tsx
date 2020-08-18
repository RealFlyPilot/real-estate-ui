import * as React from 'react'
import { Alert as BaseAlert } from '@welcome-ui/alert'
import { T_BaseComponentStyleProps, T_StatusVariant } from '../component.types'

export interface AlertButtonProps extends T_BaseComponentStyleProps {
  children: any
  variant?: T_StatusVariant
}

const AlertButton: React.SFC<AlertButtonProps> = (props) => (
  <BaseAlert.Button {...props} />
)

export interface AlertTitleProps extends T_BaseComponentStyleProps {
  children: any
  variant?: T_StatusVariant
}

const AlertTitle: React.SFC<AlertTitleProps> = (props) => (
  <BaseAlert.Title {...props} />
)

export interface AlertProps extends T_BaseComponentStyleProps {
  children: any
  variant?: T_StatusVariant
}

export interface AlertInterface extends React.SFC<AlertProps> {
  Title: React.SFC<AlertProps>
  Button: React.SFC<AlertProps>
}

const Alert: AlertInterface = ({ children, ...rest }) => {
  return <BaseAlert {...rest}>{children}</BaseAlert>
}

Alert.Title = AlertTitle
Alert.Button = AlertButton

export { Alert }
