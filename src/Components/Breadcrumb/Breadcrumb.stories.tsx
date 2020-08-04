import * as React from 'react'
import { Breadcrumb } from './Breadcrumb'

export default { title: 'Components|Breadcrumb' }

export const BreadcrumbFirstStory = () => (
  <Breadcrumb>
    {/* @ts-ignore */}
    <Breadcrumb.Item href='/'>Introduction</Breadcrumb.Item>
    {/* @ts-ignore */}
    <Breadcrumb.Item href='/'>Components</Breadcrumb.Item>
    {/* @ts-ignore */}
    <Breadcrumb.Item>Breadcrumb</Breadcrumb.Item>
  </Breadcrumb>
)

export const WithSeparator = () => (
  <div>
    <Breadcrumb separator='/'>
      <Breadcrumb.Item href='/'>Introduction</Breadcrumb.Item>
      <Breadcrumb.Item href='/'>Components</Breadcrumb.Item>
      <Breadcrumb.Item>Breadcrumb</Breadcrumb.Item>
    </Breadcrumb>

    <Breadcrumb separator='-'>
      <Breadcrumb.Item href='/'>Introduction</Breadcrumb.Item>
      <Breadcrumb.Item href='/'>Components</Breadcrumb.Item>
      <Breadcrumb.Item>Breadcrumb</Breadcrumb.Item>
    </Breadcrumb>
  </div>
)
