import * as React from 'react'
import { useToast, Toast } from './Toast'
import { Button } from '../Button'
import { Stack } from '../Stack'

export default { title: 'Components|Toast', component: Toast }

export const BasicExample = () => {
  const toast = useToast()
  console.log('toast: ', toast)

  const handleToast = () => {
    return toast(
      <Toast.Snackbar>
        <span>Lorem ipsum dolor sit amet taciti sociosqu ad</span>
      </Toast.Snackbar>,
      { position: 'top-right' }
    )
  }
  return (
    <Stack direction='row'>
      <Button onClick={handleToast}>Info (Default)</Button>
      <Button
        onClick={() =>
          toast(
            <Toast.Snackbar variant='error'>
              <span>Lorem ipsum dolor sit amet taciti sociosqu ad</span>
            </Toast.Snackbar>
          )
        }
      >
        Error
      </Button>
      <Button
        onClick={() =>
          toast(
            <Toast.Snackbar variant='warning'>
              <span>Lorem ipsum dolor sit amet taciti sociosqu ad</span>
            </Toast.Snackbar>
          )
        }
      >
        Warning
      </Button>
      <Button
        onClick={() =>
          toast(
            <Toast.Snackbar variant='success'>
              <span>Lorem ipsum dolor sit amet taciti sociosqu ad</span>
            </Toast.Snackbar>
          )
        }
      >
        Success
      </Button>
      <Button
        onClick={() =>
          toast(
            <Toast.Snackbar variant='error' icon='🤯'>
              <span>Lorem ipsum dolor sit amet taciti sociosqu ad</span>
            </Toast.Snackbar>
          )
        }
      >
        Custom icon
      </Button>
      <Button
        onClick={() =>
          toast(
            <Toast.Snackbar variant='error' icon={null}>
              <span>Lorem ipsum dolor sit amet taciti sociosqu ad</span>
            </Toast.Snackbar>
          )
        }
      >
        No icon
      </Button>
    </Stack>
  )
}
