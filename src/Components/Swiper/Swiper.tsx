import * as React from 'react'

import { Swiper as BaseSwiper } from '@welcome-ui/swiper'

export interface SwiperProps {}

export const Swiper: React.SFC<SwiperProps> = (props) => {
  return <BaseSwiper {...props} />
}
