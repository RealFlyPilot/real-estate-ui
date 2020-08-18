import * as React from 'react'
import { T_BaseComponentStyleProps, T_StatusVariant } from '../component.types'
import { Hint as BaseHint } from '@welcome-ui/hint'

export interface HintProps extends T_BaseComponentStyleProps {
  checkableField?: boolean
  children?: any
  variant?: T_StatusVariant
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
