import styled from '@emotion/styled'
import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const StyledLi = styled.li`
  color: blue;
`

const ListItem = ({ children, ...props }: Props) => {
  return <StyledLi {...props}>{children}</StyledLi>
}

export default React.memo(ListItem)
