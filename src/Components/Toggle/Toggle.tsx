import * as React from 'react'

import { Toggle as BaseToggle } from '@welcome-ui/toggle'
import { T_BaseComponentStyleProps } from '../component.types'

export interface ToggleProps extends T_BaseComponentStyleProps {
  checked?: boolean
  disabled?: boolean
  onClick?: Function
}

export const Toggle: React.SFC<ToggleProps> = (props) => {
  return <BaseToggle {...props} />
}
