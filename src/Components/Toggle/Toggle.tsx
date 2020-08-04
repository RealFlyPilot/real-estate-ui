import * as React from 'react'

import { Toggle as BaseToggle } from '@welcome-ui/toggle'
import { BaseComponentStylePropType } from '../component.types'

export interface ToggleProps extends BaseComponentStylePropType {
  checked?: boolean
  disabled?: boolean
}

export const Toggle: React.SFC<ToggleProps> = (props) => {
  return <BaseToggle {...props} />
}
