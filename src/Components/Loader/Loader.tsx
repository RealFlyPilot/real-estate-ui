import * as React from 'react'
import { T_BaseComponentStyleProps } from '../component.types'
import { Loader as BaseLoader } from '@welcome-ui/loader'

export interface LoaderProps extends T_BaseComponentStyleProps {
  color?: string
  size: number | string
}

export const Loader: React.SFC<LoaderProps> = (props) => {
  return <BaseLoader {...props} />
}
