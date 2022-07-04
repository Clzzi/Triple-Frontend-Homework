import React, { ReactNode } from 'react'
import styled from '@emotion/styled'

type FlexDirection = 'row' | 'column'
interface Props {
  children: ReactNode
  direction: FlexDirection
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
