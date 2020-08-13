import * as React from 'react'
import { T_BaseComponentStyleProps } from '../component.types'
import { Swiper as BaseSwiper } from '@welcome-ui/swiper'

export interface SwiperProps extends T_BaseComponentStyleProps {}

const Swiper: React.SFC<SwiperProps> = BaseSwiper

export { Swiper }
