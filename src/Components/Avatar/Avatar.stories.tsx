import * as React from 'react'
import { Avatar } from './Avatar'

export default { title: 'Components|Avatar', component: Avatar }

export const AvatarFirstStory = () => (
  <Avatar
    name='Welcome jungle'
    src='https://avatars3.githubusercontent.com/u/13100706?s=200&v=4'
    size='sm'
  />
)
