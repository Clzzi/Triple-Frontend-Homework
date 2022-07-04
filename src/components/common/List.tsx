import React, { HTMLAttributes, ReactNode } from 'react'
import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/react'

type FlexDirection = 'row' | 'column'
interface Props extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode
  direction: FlexDirection
  css?: SerializedStyles
}

const StyledUl = styled.ul<{ direction: FlexDirection }>`
  display: flex;
  flex-direction: ${(props) => props.direction};
`

const List = ({ children, direction, ...props }: Props) => {
  return (
    <StyledUl direction={direction} {...props}>
      {children}
    </StyledUl>
  )
}

export default React.memo(List)
