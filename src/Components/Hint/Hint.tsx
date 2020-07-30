import * as React from 'react'

import { Hint as BaseHint } from '@welcome-ui/hint'

export interface HintProps {}

export const Hint: React.SFC<HintProps> = (props) => {
  return <BaseHint {...props} />
}
