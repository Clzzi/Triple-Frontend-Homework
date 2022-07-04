import styled from '@emotion/styled'
import { ReactNode } from 'react'

const StyledSection = styled.section`
  width: 100vw;
  height: 552px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  text-align: center;
`

const Layout = ({ children }: { children: ReactNode }) => {
  return <StyledSection>{children}</StyledSection>
}

export default Layout
