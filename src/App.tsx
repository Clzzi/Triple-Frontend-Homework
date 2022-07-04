import '@/styles/reset.css'
import AwardList from './components/AwardList'
import Layout from './components/common/Layout'
import List from './components/common/List'
import StatList from './components/StatList'

const App = () => {
  return (
    <Layout>
      <List direction="row">
        <div>1</div>
        <div>
          <StatList />
          <AwardList />
        </div>
      </List>
    </Layout>
  )
}

export default App
