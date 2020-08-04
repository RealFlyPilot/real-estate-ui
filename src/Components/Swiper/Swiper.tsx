import * as React from 'react'
import { BaseComponentStylePropType } from '../component.types'
import { Swiper as BaseSwiper, useSwiper } from '@welcome-ui/swiper'
// import { useViewportSize } from '../../Utils'

// export const useSwiper = (props = {}) => {
//   let {
//     autoplay,
//     duration = 5000,
//     loop,
//     slidesToShow = 1,
//     slidesToSwipe = slidesToShow,
//     ...rest
//   } = props

//   // Set slidesToShow to 1 for mobile
//   const theme = useTheme()
//   const { width: viewportWidth } = useViewportSize()
//   if (viewportWidth <= theme.breakpoints.sm) {
//     slidesToShow = 1
//     slidesToSwipe = 1
//   }

//   const [numberOfSlides, setNumberOfSlides] = useState(0)
//   const [pageIdx, setPageIdx] = useState(0)

//   const lastSlideIdx = numberOfSlides ? numberOfSlides - slidesToShow : 0

//   // Add autoplay
//   useInterval(
//     () => {
//       if (autoplay) {
//         goNext()
//       }
//     },
//     autoplay ? duration : null
//   )

//   const goNext = () => {
//     const nextPageIdx = Math.min(pageIdx + slidesToSwipe, lastSlideIdx)

//     if (pageIdx === lastSlideIdx && loop) {
//       setPageIdx(0)
//     } else if (nextPageIdx <= lastSlideIdx) {
//       setPageIdx(nextPageIdx)
//     }
//   }

//   const goPrev = () => {
//     const prevPageIdx = Math.max(pageIdx - slidesToSwipe, 0)

//     if (pageIdx === 0 && loop) {
//       setPageIdx(lastSlideIdx)
//     } else if (prevPageIdx >= 0) {
//       setPageIdx(prevPageIdx)
//     }
//   }

//   return {
//     goNext,
//     goPrev,
//     loop,
//     numberOfSlides,
//     pageIdx,
//     setNumberOfSlides,
//     setPageIdx,
//     slidesToShow,
//     slidesToSwipe,
//     ...rest
//   }
// }

export interface SwiperProps extends BaseComponentStylePropType {}

const Swiper: React.SFC<SwiperProps> = BaseSwiper

export { Swiper, useSwiper }
