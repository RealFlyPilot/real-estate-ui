import * as React from 'react'
import { useToast, Toast } from './Toast'
import { Button } from '../Button'

export default { title: 'Toast' }

export const BasicExample = () => {
  const toast = useToast()
  console.log('toast: ', toast)

  return (
    <Button
      onClick={() =>
        toast(
          <Toast.Snackbar variant='success'>
            <span>Lorem ipsum dolor sit amet taciti sociosqu ad</span>
          </Toast.Snackbar>
        )
      }
    >
      Show Toast
    </Button>
  )
}
