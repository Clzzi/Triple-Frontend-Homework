import '@/styles/reset.css'
import styled from '@emotion/styled'

import StatList from './components/StatList'
import AwardList from './components/AwardList'
import Layout from './components/common/Layout'
import ApplicationLogo from './components/ApplicationLogo'

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
  return (
    <Layout>
      <StatContainer>
        <ApplicationLogo />
        <StatWithAwardBox>
          <StatList />
          <AwardList />
        </StatWithAwardBox>
      </StatContainer>
    </Layout>
  )
}

export default App
