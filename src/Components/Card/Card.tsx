import * as React from 'react'
import { BaseComponentStylePropType } from '../../types/base.types'
import { Card as BaseCard } from '@welcome-ui/card'

export interface CardProps extends BaseComponentStylePropType {}

export const Card: React.SFC<CardProps> = (props) => {
  return <BaseCard {...props} />
}
