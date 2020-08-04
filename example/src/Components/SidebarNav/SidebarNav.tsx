import * as React from 'react'
import { Stack, Link, Box, Text } from 'real-estate-ui'

export interface SidebarNavProps {
  links: any
}

export const SidebarNav: React.SFC<SidebarNavProps> = ({ links }) => {
  return (
    <Stack>
      {links.map((link: any) => (
        <Box>
          <Link href={link.url}>
            {link.icon}
            <Text>{link.name}</Text>
          </Link>
        </Box>
      ))}
    </Stack>
  )
}
