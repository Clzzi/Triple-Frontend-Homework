import '@/styles/reset.css'
import styled from '@emotion/styled'

import StatList from './components/StatList'
import AwardList from './components/AwardList'
import Layout from './components/common/Layout'
import ApplicationLogo from './components/ApplicationLogo'
import FadeIn from './components/common/FadeIn'
import makeTranslate from './utils/translate'

const StatContainer = styled.div`
  height: auto;
  width: 1040px;
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
  text-align: start;
`

const App = () => {
  const ANIMATION_DURATOIN = 700
  const ANIMATION_TRANSLATE = {
    from: makeTranslate('Y', 0),
    to: makeTranslate('Y', 20),
  }
  return (
    <Layout>
      <StatContainer>
        <FadeIn
          delay={0}
          duration={ANIMATION_DURATOIN}
          transform={ANIMATION_TRANSLATE}
        >
          <ApplicationLogo />
        </FadeIn>
        <StatWithAwardBox>
          <FadeIn
            delay={100}
            duration={ANIMATION_DURATOIN}
            transform={ANIMATION_TRANSLATE}
          >
            <StatList />
          </FadeIn>
          <FadeIn
            delay={200}
            duration={ANIMATION_DURATOIN}
            transform={ANIMATION_TRANSLATE}
          >
            <AwardList />
          </FadeIn>
        </StatWithAwardBox>
      </StatContainer>
    </Layout>
  )
}

export default App
