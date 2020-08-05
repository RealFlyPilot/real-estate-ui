import React, {
  cloneElement,
  useCallback,
  useContext,
  forwardRef,
  Children
} from 'react'
import { VariantIcon } from '@welcome-ui/variant-icon'
import { ClearButton } from '@welcome-ui/clear-button'
import { ThemeContext, ThemeProvider } from '@xstyled/styled-components'
import toast from 'toasted-notes'
import * as S from './Toast.styles'
import { T_BaseComponentStyleProps } from '../component.types'

export interface ToastProps extends T_BaseComponentStyleProps {
  children: any
  style?: any
  variant?: string
  icon?: any
  onClick?: Function
  size?: string
  onClose?: Function
  closeButtonDataTestId?: any
}

const Title: React.SFC<ToastProps> = ({
  children,
  icon,
  variant = 'info',
  ...rest
}) => (
  <S.Title variant={variant} {...rest}>
    <VariantIcon icon={icon} variant={variant} />
    {children}
  </S.Title>
)

const Growl: React.SFC<ToastProps> = forwardRef(
  (
    { children, closeButtonDataTestId, onClose, variant = 'info' },
    ref: React.Ref<HTMLDivElement>
  ) => {
    const content = Children.map(children, (child) => {
      // Add variant to AlertTitle to show the correct icon/color
      if (child.type === Title) {
        return cloneElement(child, { variant })
      }
      return child
    })

    return (
      <S.Growl ref={ref} variant={variant}>
        {onClose && (
          <ClearButton
            data-testid={closeButtonDataTestId}
            onClick={onClose}
            position='absolute'
            right={10}
            top={10}
          />
        )}
        {content}
      </S.Growl>
    )
  }
)

export const Snackbar: React.SFC<ToastProps> = forwardRef(
  (
    { children, icon, onClose, variant = 'info', ...rest },
    ref: React.Ref<HTMLDivElement>
  ) => (
    <S.Snackbar ref={ref} variant={variant} {...rest}>
      <Title icon={icon} pb='0' variant={variant}>
        <>
          {children}
          {onClose && <ClearButton onClick={onClose} />}
        </>
      </Title>
    </S.Snackbar>
  )
)

export function useToast() {
  const createToast = useCallback((children, options: any = null) => {
    const toastOptions = {
      position: 'bottom',
      duration: 5000,
      ...options
    }

    const isBottomPosition = toastOptions.position.startsWith('bottom')

    if (children) {
      console.log('children: ', children)
      toast.notify(
        ({ onClose }) => {
          return (
            <S.Toast isBottom={isBottomPosition}>
              {cloneElement(children, {
                ...children.props,
                onClose: onClose
              })}
            </S.Toast>
          )
        },
        { ...toastOptions }
      )
    }
  }, [])
  return createToast
}

export interface ToastInterface extends React.SFC<ToastProps> {
  Snackbar: React.SFC<ToastProps>
  Growl: React.SFC<ToastProps>
  Title: React.SFC<ToastProps>
}
export const Toast = (props) => {}

Toast.Snackbar = Snackbar
Toast.Growl = Growl
Toast.Title = Title
