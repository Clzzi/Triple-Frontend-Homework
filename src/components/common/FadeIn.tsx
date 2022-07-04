import { ReactNode } from 'react'

import useFadeIn from '@/hooks/useFadeIn'
import { UseFadeInParams } from '@/types/fadeIn.type'

interface Props extends UseFadeInParams {
  children: ReactNode
}

const FadeIn = ({ children, delay, duration, transform }: Props) => {
  const ref = useFadeIn({
    duration,
    delay,
    transform,
  })
  return <div {...ref}>{children}</div>
}

export default FadeIn
