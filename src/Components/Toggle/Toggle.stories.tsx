import * as React from 'react'
import { Toggle } from './Toggle'
import { useState } from 'react'

export default { title: 'Components|Toggle' }

export const ToggleFirstStory = () => {
  const [toggle, setToggle] = useState(false)
  const [toggleChecked, setToggleChecked] = useState(true)

  return (
    <>
      <Toggle mr='lg' checked={toggle} onClick={() => setToggle(!toggle)} />
      <Toggle
        checked={toggleChecked}
        onClick={() => setToggleChecked(!toggleChecked)}
      />
    </>
  )
}
