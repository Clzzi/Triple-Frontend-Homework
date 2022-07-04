import { AnimationTimeOptions, TimingFn } from '@/types/animation.type'

interface Props extends AnimationTimeOptions {
  timingFn: TimingFn
}

export const makeTransition = ({
  duration,
  delay,
  timingFn,
}: Props): string => {
  return `all ${duration}ms ${timingFn} ${delay}ms`
}