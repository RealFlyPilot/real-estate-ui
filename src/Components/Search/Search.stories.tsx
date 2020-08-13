import * as React from 'react'
import { Search } from './Search'
import { Form } from '../Form'
import { ConnectedField } from '../ConnectedField'
import { Shape } from '../Shape'

export default { title: 'Form Elements|Search' }

export const SearchForAMovie = () => (
  <Form initialValues={{}}>
    <ConnectedField
      component={Search}
      search={async function asyncSearch(s) {
        const response = await fetch(
          `https://www.omdbapi.com?apikey=41514363&s=${s}`
        )
        const data = await response.json()
        console.log('data: ', data)
        return data.Search
      }}
      label='Movies'
      name='movies'
      renderItem={(item) => {
        console.log('item: ', item)

        return (
          item && (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Shape width='40px' height='40px' shape='circle' mr='sm'>
                <img src={item.Poster} />
              </Shape>
              {item.Title} ({item.Year})
            </div>
          )
        )
      }}
      placeholder='Search a movie'
      itemToString={(item) => item && item.Title}
    />
  </Form>
)
