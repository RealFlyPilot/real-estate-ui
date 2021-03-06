import * as React from 'react'
import { Card } from './Card'
import { Text } from '../Text'
import { Box } from '../Box'

export default { title: 'Components|Card' }

export const BasicCardWithPadding = () => (
  <Card maxWidth={400} lineHeight='2'>
    <Card.Body>
      A card doesn't have padding by default. To add padding to a card, you
      should wrap your content in a <strong>Card.Body</strong> which has default{' '}
      <strong>padding</strong> of <strong>lg</strong>.
    </Card.Body>
  </Card>
)

export const CardWithContent = () => (
  <Card maxWidth={400}>
    <Card.Cover
      width={1}
      src='https://m.media-amazon.com/images/M/MV5BMzE0NzgyODIxN15BMl5BanBnXkFtZTgwNDU0NjU5NzE@._V1_SX1777_CR0,0,1777,994_AL_.jpg'
    />
    <Card.Body>
      <Text as='h4' fontWeight='bold' mt={0} mb='lg' color='dark.900'>
        The Jungle Book
      </Text>
      After a threat from the tiger Shere Khan forces him to flee the jungle, a
      man-cub named Mowgli embarks on a journey of self discovery with the help
      of panther Bagheera and free-spirited bear Baloo.
    </Card.Body>
  </Card>
)

export const PictureCard = () => (
  <Card
    maxWidth={400}
    height={200}
    backgroundImage="url('https://m.media-amazon.com/images/M/MV5BMzE0NzgyODIxN15BMl5BanBnXkFtZTgwNDU0NjU5NzE@._V1_SX1777_CR0,0,1777,994_AL_.jpg')"
    display='flex'
    alignItems='flex-end'
  >
    <Box
      padding='xl'
      width={1}
      background='linear-gradient(0deg, rgba(0,0, 0, 0.7) 0%, rgba(0,0,0,0) 100%)'
    >
      <Text as='h4' fontWeight='bold' m={0} color='light.900'>
        The Jungle Book
      </Text>
    </Box>
  </Card>
)
