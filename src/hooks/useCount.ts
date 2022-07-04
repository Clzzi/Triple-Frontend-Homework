import { useEffect, useState } from 'react'

import easeOutExpo from '@/utils/easeOutExpo'

const FrameRate = 1000 / 60

const useCount = (endNumber: number, initialNumber = 0, duration = 2000) => {
  const [count, setCount] = useState(initialNumber)
  const totalFrame = Math.round(duration / FrameRate)

  useEffect(() => {
    let currentFrame = 0
    const counter = setInterval(() => {
      const progress = easeOutExpo(++currentFrame / totalFrame)
      setCount(Math.floor(endNumber * progress))

      if (progress === 1) {
        clearInterval(counter)
      }
    }, FrameRate)
  }, [duration, endNumber, totalFrame])

  return count
}

export default useCount
