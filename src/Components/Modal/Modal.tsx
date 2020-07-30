import * as React from 'react'

import { Modal as BaseModal } from '@welcome-ui/modal'

export interface ModalProps {}

export const Modal: React.SFC<ModalProps> = (props) => {
  return <BaseModal {...props} />
}
