export type TimingFn = 'ease' | 'ease-in-out' | 'ease-in' | 'ease-out'

export interface AnimationTimeOptions {
  duration: number
  delay: number
}

export interface TransformOptions {
  from: string
  to: string
}
