import { ReactNode } from 'react'

import useFadeIn from '@/hooks/useFadeIn'
import { UseFadeInProps } from '@/types/fadeIn.type'

interface Props extends UseFadeInProps {
  children: ReactNode
}

const FadeIn = ({ children, delay, duration }: Props) => {
  const transformOption = {
    from: 'translateY(0px)',
    to: 'translateY(20px)',
  }
  const ref = useFadeIn({
    duration,
    delay,
    transform: transformOption,
  })
  return <div {...ref}>{children}</div>
}

export default FadeIn
