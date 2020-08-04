import * as React from 'react'
import { Tag } from './Tag'

export default { title: 'Tag' }

export const Basics = () => (
  <div>
    <Tag>Default</Tag>
    <Tag variant='primary'>Primary</Tag>
    <Tag variant='secondary'>Secondary</Tag>
    <Tag variant='dark'>Dark</Tag>
  </div>
)

export const States = () => (
  <div>
    <Tag variant='success'>Success</Tag>
    <Tag variant='error'>Error</Tag>
    <Tag variant='warning'>Warning</Tag>
    <Tag variant='info'>Info</Tag>
  </div>
)

export const WithShapes = () => (
  <div>
    <Tag size='lg' shape='circle'>
      1
    </Tag>
    <Tag size='lg' shape='square'>
      1
    </Tag>
  </div>
)
