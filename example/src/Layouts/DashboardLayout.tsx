// @ts-nocheck
import React from 'react'
import {
  Box,
  Code,
  Stack,
  Text,
  SidebarLayout,
  Button,
  DropdownMenu,
  Group,
  Shape,
  Card,
  // UpIcon,
  useDropdownMenuState,
  icons
} from 'real-estate-ui'
import { CustomizeTheme } from '../Components/CustomizeTheme'

const {
  SearchIcon,
  UploadIcon,
  WriteIcon,
  TrashIcon,
  CodeIcon,
  AvatarIcon,
  Heading1Icon,
  MenuIcon,
  EditIcon,
  CheckIcon,
  AddIcon,
  CrossIcon,
  DownIcon,

  GetIcon,
  AttachmentIcon
} = icons

export interface DashboardLayoutProps {}

const DashboardLayout: React.SFC<DashboardLayoutProps> = () => {
  const menu = useDropdownMenuState({ gutter: 10, placement: 'bottom-end' })

  const handleClick = (e: any) => {
    console.log(`Clicked on ${e.target.innerText}`)
    menu.hide()
  }
  return (
    <Stack>
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
            <img src='/logo.jpg' />
          </Shape>
        </Box>
        <Box position='absolute' top='24px' right='32px'>
          <Group variant='tertiary'>
            <Button onClick={handleClick}>
              <AddIcon />
              <span>First Action</span>
            </Button>
            <DropdownMenu.Trigger {...menu} as={Button}>
              {menu.visible ? <CrossIcon /> : <MenuIcon />}
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
      </Box>
      <SidebarLayout px={16}>
        <SidebarLayout.Sidebar width='max-content'>
          <Stack spacing='xl' alignItems='center'>
            <Box>
              <Button shape='circle' size='lg'>
                <AvatarIcon size='lg' />
              </Button>
            </Box>
            <Box>
              <Button shape='circle' size='lg'>
                <SearchIcon size='lg' />
              </Button>
            </Box>
            <Box>
              <Button shape='circle' size='lg'>
                <UploadIcon size='lg' />
              </Button>
            </Box>
          </Stack>
        </SidebarLayout.Sidebar>
        <SidebarLayout.Main px={16}>
          <CustomizeTheme />
        </SidebarLayout.Main>
      </SidebarLayout>
    </Stack>
  )
}

export default DashboardLayout
