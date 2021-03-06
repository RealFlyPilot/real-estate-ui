// @ts-nocheck

import * as React from 'react'
import { useTheme } from '@xstyled/styled-components'
import { useViewportSize } from './use-viewport'
import { useState } from 'react'
import { useInterval } from './use-interval'

export const useSwiper = (props: any = {}) => {
  let {
    autoplay,
    duration = 5000,
    loop,
    slidesToShow = 1,
    slidesToSwipe = slidesToShow,
    ...rest
  } = props

  // Set slidesToShow to 1 for mobile
  const theme = useTheme()
  const { width: viewportWidth }: any = useViewportSize()

  // Prior to this conditional - was getting breaking error 'cannot read property breakpoints of undefined'
  if (theme && theme.breakpoints && viewportWidth <= theme.breakpoints.sm) {
    slidesToShow = 1
    slidesToSwipe = 1
  }

  const [numberOfSlides, setNumberOfSlides] = useState(0)
  const [pageIdx, setPageIdx] = useState(0)

  const lastSlideIdx = numberOfSlides ? numberOfSlides - slidesToShow : 0

  // Add autoplay
  useInterval(
    () => {
      if (autoplay) {
        goNext()
      }
    },
    autoplay ? duration : null
  )

  const goNext = () => {
    const nextPageIdx = Math.min(pageIdx + slidesToSwipe, lastSlideIdx)

    if (pageIdx === lastSlideIdx && loop) {
      setPageIdx(0)
    } else if (nextPageIdx <= lastSlideIdx) {
      setPageIdx(nextPageIdx)
    }
  }

  const goPrev = () => {
    const prevPageIdx = Math.max(pageIdx - slidesToSwipe, 0)

    if (pageIdx === 0 && loop) {
      setPageIdx(lastSlideIdx)
    } else if (prevPageIdx >= 0) {
      setPageIdx(prevPageIdx)
    }
  }

  return {
    goNext,
    goPrev,
    loop,
    numberOfSlides,
    pageIdx,
    setNumberOfSlides,
    setPageIdx,
    slidesToShow,
    slidesToSwipe,
    ...rest
  }
}
