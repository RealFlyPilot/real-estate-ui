import * as React from 'react'
import { Loader } from './Loader'

export default { title: 'Loader' }

export const Examples = () => (
  <div>
    <Loader size='xs' />
    <br />
    <Loader />
    <br />
    <Loader color='primary.500' size='md' />
    <br />
    <Loader color='primary.500' size='lg' />
    <br />
    <Loader color='primary.500' size='40px' />
    <br />
    <Loader color='primary.500' size={50} />
  </div>
)
