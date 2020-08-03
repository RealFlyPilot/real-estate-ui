import * as React from 'react'
import { DropdownMenu, useDropdownMenuState } from './DropdownMenu'
import { Button } from '../Button'

export default { title: 'DropdownMenu' }

export const DropdownMenuFirstStory = () => {
  const menu = useDropdownMenuState({
    gutter: 10
  })

  console.log('menu: ', menu)
  console.log('menu.visible: ', menu.visible)

  const handleClick = (e) => {
    console.log(`Clicked on ${e.target.innerText}`)
    menu.hide()
  }

  return (
    <>
      <DropdownMenu.Trigger {...menu} as={Button}>
        Dropdown Menu
      </DropdownMenu.Trigger>
      <DropdownMenu {...menu} aria-label='Example'>
        <DropdownMenu.Item {...menu} onClick={handleClick}>
          Twitter
        </DropdownMenu.Item>
        <DropdownMenu.Item {...menu} onClick={handleClick} disabled>
          Facebook
        </DropdownMenu.Item>
        <DropdownMenu.Item {...menu} onClick={handleClick}>
          Instagram
        </DropdownMenu.Item>
        <DropdownMenu.Separator {...menu} />
        <DropdownMenu.Item {...menu} onClick={handleClick}>
          Github
        </DropdownMenu.Item>
      </DropdownMenu>
    </>
  )
}
