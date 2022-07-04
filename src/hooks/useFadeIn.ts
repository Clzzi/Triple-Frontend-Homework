import { useEffect, useRef } from 'react'

import { makeTransition } from '@/utils/transition'
import { UseFadeInProps } from '@/types/fadeIn.type'

const useFadeIn = ({ delay, duration, transform }: UseFadeInProps) => {
  const element = useRef(null)

  useEffect(() => {
    if (element.current) {
      const { style } = element.current
      style.transition = makeTransition({
        duration,
        delay,
        timingFn: 'ease-in-out',
      })
      style.transform = transform.from
      style.opacity = '1'
    }
  }, [delay, duration, transform])

  return {
    ref: element,
    style: { opacity: 0, transform: transform.to ? transform.to : null },
  }
}

export default useFadeIn
