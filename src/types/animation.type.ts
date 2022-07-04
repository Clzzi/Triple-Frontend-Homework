export type TransitionTimingOptions =
  | 'ease'
  | 'ease-in-out'
  | 'ease-in'
  | 'ease-out'
  | 'linear'

export interface AnimationTimeOptions {
  duration: number
  delay: number
}

export interface TransformOptions {
  from: string
  to: string
}
