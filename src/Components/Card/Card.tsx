import * as React from 'react'
import { BaseComponentStylePropType } from '../component.types'
import { Card as BaseCard } from '@welcome-ui/card'

export interface CardProps extends BaseComponentStylePropType {}

const Card: React.SFC<CardProps> = (props) => {
  return <BaseCard {...props} />
}

// @ts-ignore
Card.Cover = BaseCard.Cover
// @ts-ignore
Card.Body = BaseCard.Body

export { Card }
