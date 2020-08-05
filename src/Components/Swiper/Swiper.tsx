import * as React from 'react'
import { BaseComponentStylePropType } from '../component.types'
import { Swiper as BaseSwiper } from '@welcome-ui/swiper'

export interface SwiperProps extends BaseComponentStylePropType {}

const Swiper: React.SFC<SwiperProps> = BaseSwiper

export { Swiper }
