import {
  AnimationTimeOptions,
  TransitionTimingOptions,
} from '@/types/animation.type'

interface Params extends AnimationTimeOptions {
  transitionTimingOption: TransitionTimingOptions
}

export const makeTransition = ({
  duration,
  delay,
  transitionTimingOption,
}: Params): string => {
  return `all ${duration}ms ${transitionTimingOption} ${delay}ms`
}
