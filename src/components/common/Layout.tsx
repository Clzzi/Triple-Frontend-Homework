import { ReactNode } from 'react'
import styled from '@emotion/styled'

const StyledSection = styled.section`
  width: 100vw;
  min-width: 1200px;
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
