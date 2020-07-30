import * as React from 'react'

import { useCopyText as BaseuseCopyText } from '@welcome-ui/utils.copy'

export interface useCopyTextProps {}

export const useCopyText: React.SFC<useCopyTextProps> = (props) => {
  return <BaseuseCopyText {...props} />
}
