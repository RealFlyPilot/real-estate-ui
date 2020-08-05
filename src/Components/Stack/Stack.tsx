import * as React from 'react'
import { T_BaseComponentStyleProps } from '../component.types'
import { Stack as BaseStack } from '@welcome-ui/stack'

export interface StackProps extends T_BaseComponentStyleProps {
  direction?: string
  spacing?: string
  as?: string
}

export const Stack: React.SFC<StackProps> = (props) => {
  return <BaseStack {...props} />
}
