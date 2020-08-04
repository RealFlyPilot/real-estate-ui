import * as React from 'react'
import { BaseComponentStylePropType } from '../component.types'
import { Stack as BaseStack } from '@welcome-ui/stack'

export interface StackProps extends BaseComponentStylePropType {
  direction?: string
  as?: string
}

export const Stack: React.SFC<StackProps> = (props) => {
  return <BaseStack {...props} />
}
