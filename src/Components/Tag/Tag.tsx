import * as React from 'react'

import { Tag as BaseTag } from '@welcome-ui/tag'

export interface TagProps {}

export const Tag: React.SFC<TagProps> = (props) => {
  return <BaseTag {...props} />
}
