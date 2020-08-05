import * as React from 'react'

import { Tooltip as BaseTooltip } from '@welcome-ui/tooltip'
import { T_BaseComponentStyleProps } from '../component.types'

export interface TooltipProps extends T_BaseComponentStyleProps {
  children?: any
  content?: any
  fixed?: boolean
  placement?:
    | 'auto-start'
    | 'auto'
    | 'auto-end'
    | 'top-start'
    | 'top'
    | 'top-end'
    | 'right-start'
    | 'right'
    | 'right-end'
    | 'bottom-end'
    | 'bottom'
    | 'bottom-start'
    | 'left-end'
    | 'left'
    | 'left-start'
}

export const Tooltip: React.SFC<TooltipProps> = (props) => {
  return <BaseTooltip {...props} />
}
