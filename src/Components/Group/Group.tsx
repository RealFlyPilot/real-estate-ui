import * as React from 'react'
import { BaseComponentStylePropType } from '../../types/base.types'
import { Group as BaseGroup } from '@welcome-ui/group'

export interface GroupProps extends BaseComponentStylePropType {
  children: any
  variant?: string
  size?: string
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
