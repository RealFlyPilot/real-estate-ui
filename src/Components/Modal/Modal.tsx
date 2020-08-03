import * as React from 'react'
import { BaseComponentStylePropType } from '../../types/base.types'
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

const Modal: React.SFC<ModalProps> = BaseModal

export { Modal, useModalState }
