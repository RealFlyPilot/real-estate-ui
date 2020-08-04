import * as React from 'react'
import { BaseComponentStylePropType } from '../component.types'
import { Swiper as BaseSwiper } from '@welcome-ui/swiper'
import { useTheme } from '@xstyled/styled-components'
import { useViewportSize } from './use-viewport'
import { useState } from 'react'
import { useInterval } from './use-interval'

export interface SwiperProps extends BaseComponentStylePropType {}

const Swiper: React.SFC<SwiperProps> = BaseSwiper

export { Swiper }
