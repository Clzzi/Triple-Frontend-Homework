import { MutableRefObject, useEffect, useRef } from 'react'

import { makeTransition } from '@/utils/transition'
import { UseFadeInParams } from '@/types/fadeIn.type'

const useFadeIn = ({ delay, duration, transform }: UseFadeInParams) => {
  const elementRef: MutableRefObject<HTMLDivElement> = useRef(null)

  useEffect(() => {
    if (elementRef.current) {
      const { style } = elementRef.current
      style.transition = makeTransition({
        duration,
        delay,
        transitionTimingOption: 'ease-in-out',
      })
      style.transform = transform.from
      style.opacity = '1'
    }
  }, [delay, duration, transform])

  return {
    ref: elementRef,
    style: { opacity: 0, transform: transform.to ? transform.to : null },
  }
}

export default useFadeIn
