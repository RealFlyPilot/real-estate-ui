import React from 'react'
import {
  Box,
  Button,
  DropdownMenu,
  Group,
  Shape,
  useDropdownMenuState,
  TrashIcon,
  MenuIcon,
  AddIcon,
  CrossIcon,
  AttachmentIcon
} from 'real-estate-ui'
import logo from '../logo.jpg'

export interface HeaderProps {}

export const Header: React.SFC<HeaderProps> = () => {
  const menu = useDropdownMenuState({ gutter: 10, placement: 'bottom-end' })
  const handleClick = () => menu.hide()
  return (
    <Box
      width='100%'
      position='sticky'
      zIndex='100'
      top='0'
      display='flex'
      alignItems='center'
      px={16}
    >
      <Box>
        <Shape height={75} width={100}>
          <img src={logo} alt='logo' />
        </Shape>
      </Box>
      <Box position='absolute' top='24px' right='32px'>
        <Group variant='tertiary'>
          <Button onClick={handleClick}>
            <AddIcon />
            <span>Uploads</span>
          </Button>
          <DropdownMenu.Trigger {...menu} as={Button}>
            {menu.visible ? <CrossIcon /> : <MenuIcon />}
          </DropdownMenu.Trigger>
        </Group>
        <DropdownMenu {...menu} aria-label='Complexity'>
          <DropdownMenu.Item {...menu} onClick={handleClick}>
            <TrashIcon mr='sm' size='sm' />
            <Box>Upload Existing Theme (JSON)</Box>
          </DropdownMenu.Item>
          <DropdownMenu.Item {...menu} onClick={handleClick}>
            <AttachmentIcon mr='sm' size='sm' />
            <Box>Third Action</Box>
          </DropdownMenu.Item>
        </DropdownMenu>
      </Box>
    </Box>
  )
}
