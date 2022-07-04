import styled from '@emotion/styled'
import { HTMLAttributes, ReactNode } from 'react'

interface Props extends HTMLAttributes<HTMLSpanElement> {
  fontSize?: string
  children: ReactNode
}

const StyledText = styled.span<{ fontSize: string }>`
  font-weight: normal;
  word-break: keep-all;
  font-size: ${(props) => props.fontSize};
`

const Text = ({ fontSize = '14px', children, ...props }: Props) => {
  return (
    <StyledText fontSize={fontSize} {...props}>
      {children}
    </StyledText>
  )
}

export default Text
