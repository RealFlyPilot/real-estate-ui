import * as React from 'react'

import { Loader as BaseLoader } from '@welcome-ui/loader'

export interface LoaderProps {}

export const Loader: React.SFC<LoaderProps> = (props) => {
  return <BaseLoader {...props} />
}
