import * as React from 'react'
import { Link } from './Link'
import { Box } from '../Box'
import { Avatar } from '../Avatar'
import { Text } from '../Text'

export default { title: 'Components|Link', component: Link }

export const LinkFirstStory = () => (
  <div>
    <Box>
      <Link href='#'>primary link</Link>
    </Box>
    <Box>
      <Link href='#' variant='secondary'>
        secondary link
      </Link>
    </Box>
  </div>
)

export const Underline = () => (
  <div>
    <Box>
      <Link href='#'>
        <Avatar
          name='jungle'
          size='lg'
          src='https://avatars3.githubusercontent.com/u/13100706?s=200&v=4'
        />
        This is a text node
      </Link>
    </Box>
    <Box>
      <Link href='#'>
        <Avatar name='jungle' size='lg' />
        <Text>This is a text in a Text component</Text>
      </Link>
    </Box>
  </div>
)

export const ExampleWithReactRouter = () => (
  <div>
    ```
    {/* import { Link as RouterLink } from 'react-router-dom'
<Link as={RouterLink} to="/jobs">
  Jobs
</Link> */}
    ```
  </div>
)
