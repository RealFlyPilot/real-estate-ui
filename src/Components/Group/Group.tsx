import * as React from 'react'
import {
  T_BaseComponentStyleProps,
  T_NumericVariant,
  T_Sizes
} from '../component.types'
import { Group as BaseGroup } from '@welcome-ui/group'

export interface GroupProps extends T_BaseComponentStyleProps {
  children: any
  variant?: T_NumericVariant
  size?: T_Sizes
}

export const Group: React.SFC<GroupProps> = ({
  children,
  variant,
  size,
  ...rest
}) => {
  return (
    <BaseGroup variant={variant} size={size} {...rest}>
      {children}
    </BaseGroup>
  )
}
