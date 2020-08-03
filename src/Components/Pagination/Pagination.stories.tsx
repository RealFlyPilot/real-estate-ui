import * as React from 'react'
import { Pagination } from './Pagination'
import { useState } from 'react'
import { icons } from '../Icon/Icon'

const { CrownIcon } = icons

export default { title: 'Pagination', component: Pagination }

export const BasicExample = () => {
  const [page, setPage] = useState(8)

  return (
    <Pagination
      aria-label='Pagination'
      getHref={(page) => `?page=${page}`}
      page={page}
      onChange={setPage}
      pageCount={10}
    />
  )
}

export const RangeDisplay = () => {
  const [page, setPage] = useState(1)

  return (
    <Pagination
      aria-label='Pagination'
      getHref={(page) => `?page=${page}`}
      page={page}
      onChange={setPage}
      pageCount={5}
      rangeDisplay={10}
    />
  )
}

export const CustomButtons = () => {
  const [page, setPage] = useState(5)

  return (
    <Pagination
      aria-label='Pagination'
      getHref={(page) => `?page=${page}`}
      page={page}
      onChange={setPage}
      pageCount={10}
      leftArrow={<CrownIcon size='xs' />}
      rightArrow={<CrownIcon size='xs' />}
    />
  )
}
