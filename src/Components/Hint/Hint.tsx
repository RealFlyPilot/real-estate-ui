import * as React from 'react'
import { T_BaseComponentStyleProps } from '../component.types'
import { Hint as BaseHint } from '@welcome-ui/hint'

export interface HintProps extends T_BaseComponentStyleProps {
  checkableField?: boolean
  children?: any
  variant?: 'warning' | 'error' | 'info' | 'success'
}

export const Hint: React.SFC<HintProps> = ({
  children,
  checkableField,
  ...rest
}) => {
  return (
    <BaseHint {...rest} checkableField={checkableField}>
      {children}
    </BaseHint>
  )
}
