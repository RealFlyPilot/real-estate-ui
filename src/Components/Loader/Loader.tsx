import * as React from 'react'
import { BaseComponentStylePropType } from '../../types/base.types'
import { Loader as BaseLoader } from '@welcome-ui/loader'

export interface LoaderProps extends BaseComponentStylePropType {
  color?: string
  size: number | string
}

export const Loader: React.SFC<LoaderProps> = (props) => {
  return <BaseLoader {...props} />
}
