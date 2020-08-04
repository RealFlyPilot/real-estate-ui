import * as React from 'react'
import { BaseComponentStylePropType } from '../component.types'
import { Modal as BaseModal, useModalState } from '@welcome-ui/modal'

export interface ModalProps extends BaseComponentStylePropType {
  ariaLabel?: string
  children?: any
  closeElement?: Node
  hide?: Function
  hideOnClickOutside?: boolean
  onClose?: Function
  size?: 'sm' | 'md' | 'lg' | 'auto'
}

export interface ModalInterface extends React.SFC<ModalProps> {
  Trigger: React.SFC<ModalProps>
  Content: React.SFC<ModalProps>
  style?: any
}

const Modal: ModalInterface = (props) => {
  return <BaseModal {...props} />
}
Modal.Trigger = BaseModal.Trigger
Modal.Content = BaseModal.Content

export { Modal, useModalState }
