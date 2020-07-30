import * as React from 'react'

import { Search as BaseSearch } from '@welcome-ui/search'

export interface SearchProps {}

export const Search: React.SFC<SearchProps> = (props) => {
  return <BaseSearch {...props} />
}
