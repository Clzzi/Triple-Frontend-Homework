import '@/styles/reset.css'
import styled from '@emotion/styled'

import StatList from './components/StatList'
import AwardList from './components/AwardList'
import Layout from './components/common/Layout'
import ApplicationLogo from './components/ApplicationLogo'
import FadeIn from './components/common/FadeIn'

const StatContainer = styled.div`
  height: auto;
  width: 1040px;
  min-width: 1040px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: 0px 80px;
`

const StatWithAwardBox = styled.div`
  width: 417px;
  display: flex;
  flex-direction: column;
  margin-bottom: 84px;
`

const App = () => {
  const ANIMATION_DEFAULT_DURATOIN = 700
  return (
    <Layout>
      <StatContainer>
        <FadeIn delay={100} duration={ANIMATION_DEFAULT_DURATOIN}>
          <ApplicationLogo />
        </FadeIn>
        <StatWithAwardBox>
          <FadeIn delay={200} duration={ANIMATION_DEFAULT_DURATOIN}>
            <StatList />
          </FadeIn>
          <FadeIn delay={300} duration={ANIMATION_DEFAULT_DURATOIN}>
            <AwardList />
          </FadeIn>
        </StatWithAwardBox>
      </StatContainer>
    </Layout>
  )
}

export default App
