import * as React from 'react'
import { Badge } from './Badge'

export default { title: 'Badge' }

export const BadgeFirstStory = () => (
  <div>
    <Badge>{0}</Badge>
    <Badge>{1}</Badge>
    <Badge>2</Badge>
    <Badge>3</Badge>
    <Badge>4</Badge>
    <Badge variant='primary'>New</Badge>
  </div>
)
