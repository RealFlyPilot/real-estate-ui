import * as React from 'react'

import { Select as BaseSelect } from '@welcome-ui/select'
import { T_BaseComponentStyleProps } from '../component.types'

export interface SelectProps extends T_BaseComponentStyleProps {
  options?: any
  onChange?: Function
  name?: string
  label?: string
  ref?: any
  isClearable?: boolean
}

export const Select: React.SFC<SelectProps> = React.forwardRef((props, ref) => {
  return <BaseSelect {...props} ref={ref} />
})
