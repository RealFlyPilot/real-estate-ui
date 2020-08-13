import * as React from 'react'
import { Tooltip } from './Tooltip'
import { Button } from '../Button'
export default { title: 'Components|Tooltip' }

export const TooltipFirstStory = () => (
  <Tooltip content='🔥🔥🔥🔥🔥🔥🔥'>
    <Button>Show a beautiful tooltip 🔥</Button>
  </Tooltip>
)
