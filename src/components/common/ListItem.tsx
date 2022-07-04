import styled from '@emotion/styled'
import React, { LiHTMLAttributes, ReactNode } from 'react'

interface Props extends LiHTMLAttributes<HTMLLIElement> {
  children: ReactNode
}

const StyledLi = styled.li`
  color: blue;
`

const ListItem = ({ children, ...props }: Props) => {
  return <StyledLi {...props}>{children}</StyledLi>
}

export default React.memo(ListItem)
