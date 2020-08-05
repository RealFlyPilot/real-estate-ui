import * as React from 'react'
import { T_BaseComponentStyleProps } from '../component.types'
import { Tag as BaseTag } from '@welcome-ui/tag'

export interface TagProps extends T_BaseComponentStyleProps {
  children?: any
  onRemove?: Function
  shape?: 'square' | 'circle'
  size?: 'sm' | 'md' | 'lg'
  variant?:
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | 'dark'
    | 'default'
    | 'error'
    | 'info'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
}

export const Tag: React.SFC<TagProps> = (props) => {
  return <BaseTag {...props} />
}
