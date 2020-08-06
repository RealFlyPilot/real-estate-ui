import React from 'react'
import { Box } from '../Box'
import { ToastProvider, useToasts } from 'react-toast-notifications'

export interface ToastProps {
  children: any
  appearance?: string
}

const Toast: React.SFC<ToastProps> = ({ children }) => {
  return (
    <Box
      backgroundColor='light.900'
      borderWidth='1px'
      borderStyle='solid'
      borderColor='nude.300'
      borderRadius='sm'
      padding='sm'
      color='dark.900'
    >
      {children}
    </Box>
  )
}
ToastProvider.components = { Toast: Toast }

export { ToastProvider, useToasts, Toast }
