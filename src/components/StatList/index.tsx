import Bold from '@/styles/Bold'
import Text from '@/components/common/Text'
import ColorPalette from '@/constants/color'

import List from '../common/List'
import ListItem from '../common/ListItem'

interface StatItemProps {
  emphasizeStat: string
  message: string
}

const StatItem = ({ emphasizeStat, message }: StatItemProps) => {
  return (
    <ListItem>
      <Text fontSize="36px">
        <Bold>{emphasizeStat}</Bold>
        {message}
      </Text>
    </ListItem>
  )
}

const StatList = () => {
  return (
    <List direction="column" style={{ color: ColorPalette.black900 }}>
      <StatItem emphasizeStat="700명 명" message="의 여행자" />
      <StatItem emphasizeStat="100만 개" message="의 여행 리뷰" />
      <StatItem emphasizeStat="470만 개" message="의 여행 일정" />
    </List>
  )
}

export default StatList
