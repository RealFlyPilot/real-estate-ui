import * as React from 'react'
import { T_BaseComponentStyleProps } from '../component.types'
import { Card as BaseCard } from '@welcome-ui/card'

export interface CardProps extends T_BaseComponentStyleProps {
  children: any
  style?: any
}

export interface CardInterface extends React.SFC<CardProps> {
  Cover: React.SFC<CardProps>
  Body: React.SFC<CardProps>
  style?: any
}

// CheckboxPropsT_BaseComponentStyleProps
const Card: CardInterface = (props) => {
  return <BaseCard {...props} />
}

Card.Cover = BaseCard.Cover
Card.Body = BaseCard.Body

export { Card }
