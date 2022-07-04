import styled from '@emotion/styled'
import { HTMLAttributes, ReactNode } from 'react'

interface Props extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode
  fontSize?: string
}

const StyledText = styled.span<{ fontSize: string }>`
  font-size: ${(props) => props.fontSize};
  font-weight: 'normal';
`

const Text = ({ fontSize = '14px', children, ...props }: Props) => {
  return (
    <StyledText fontSize={fontSize} {...props}>
      {children}
    </StyledText>
  )
}

export default Text
