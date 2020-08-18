import * as React from 'react'
import { DropdownMenu, useDropdownMenuState } from './DropdownMenu'
import { TrashIcon, AttachmentIcon, UpIcon, DownIcon, AddIcon } from '../Icon'
import { Button } from '../Button'
import { Box } from '../Box'
import { Group } from '../Group'

export default { title: 'Components|DropdownMenu', component: DropdownMenu }

export const DropdownMenuSimple = () => {
  const menu = useDropdownMenuState({
    gutter: 10
  })

  const handleClick = (e) => {
    alert(`Clicked on ${e.target.innerText}`)
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

export const DropdownMenuMoreComplex = () => {
  const menu = useDropdownMenuState({ gutter: 10, placement: 'bottom-end' })

  const handleClick = (e) => {
    alert(`Clicked on ${e.target.innerText}`)
    menu.hide()
  }
  return (
    <Box position='relative'>
      <Group variant='tertiary'>
        <Button onClick={handleClick}>
          <AddIcon />
          <span>First Action</span>
        </Button>
        <DropdownMenu.Trigger {...menu} as={Button}>
          {menu.visible ? <UpIcon /> : <DownIcon />}
        </DropdownMenu.Trigger>
      </Group>
      <DropdownMenu {...menu} aria-label='Complexity'>
        <DropdownMenu.Item {...menu} onClick={handleClick}>
          <TrashIcon mr='sm' size='sm' />
          <Box>Second Action</Box>
        </DropdownMenu.Item>
        <DropdownMenu.Item {...menu} onClick={handleClick}>
          <AttachmentIcon mr='sm' size='sm' />
          <Box>Third Action</Box>
        </DropdownMenu.Item>
      </DropdownMenu>
    </Box>
  )
}
