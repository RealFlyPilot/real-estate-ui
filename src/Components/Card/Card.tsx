import * as React from 'react'
import { BaseComponentStylePropType } from '../component.types'
import { Card as BaseCard } from '@welcome-ui/card'

// const {Body, Cover}

export interface CardProps extends BaseComponentStylePropType {
  children: any
  style?: any
}

export interface CardInterface extends React.SFC<CardProps> {
  Cover: React.SFC<CardProps>
  Body: React.SFC<CardProps>
  style?: any
}

// CheckboxPropsBaseComponentStylePropType
const Card: CardInterface = (props) => {
  return <BaseCard {...props} />
}

Card.Cover = BaseCard.Cover
Card.Body = BaseCard.Body

export { Card }
