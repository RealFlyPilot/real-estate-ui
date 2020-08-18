import * as React from 'react'
import {
  Box,
  Stack,
  SidebarLayout,
  Button,
  SearchIcon,
  AvatarIcon
} from 'real-estate-ui'

export interface SidebarNavProps {
  links?: any
}

export const SidebarNav: React.SFC<SidebarNavProps> = ({ links }) => {
  return (
    <SidebarLayout.Sidebar width='max-content'>
      <Stack spacing='xl' alignItems='center'>
        <Box>
          <Button shape='circle' size='lg' variant='primary'>
            <AvatarIcon size='lg' />
          </Button>
        </Box>
        <Box>
          <Button shape='circle' size='lg' variant='primary'>
            <SearchIcon size='lg' />
          </Button>
        </Box>
      </Stack>
    </SidebarLayout.Sidebar>
  )
}
