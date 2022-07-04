import { css } from '@emotion/react'

import Bold from '@/styles/Bold'
import Text from '@/components/common/Text'
import ColorPalette from '@/constants/color'
import useCount from '@/hooks/useCount'

import List from '../common/List'
import ListItem from '../common/ListItem'

interface StatItemProps {
  message: string
  emphasizeStat: string
}

const StatListCustomStyle = css`
  text-align: start;
  color: ${ColorPalette.black900};
`

const StatItemCustomStyle = css`
  margin-bottom: 20px;
  letter-spacing: -1px;
  &:last-child {
    margin-bottom: 0px;
  }
`

const StatItem = ({ emphasizeStat, message }: StatItemProps) => {
  return (
    <ListItem css={StatItemCustomStyle}>
      <Text fontSize="36px">
        <Bold>{emphasizeStat}</Bold>
        {message}
      </Text>
    </ListItem>
  )
}

const StatList = () => {
  const customerCount = useCount(700)
  const travelReviewCount = useCount(100)
  const travelScheduleCount = useCount(470)

  return (
    <List direction="column" css={StatListCustomStyle}>
      <StatItem emphasizeStat={`${customerCount}만 명`} message="의 여행자" />
      <StatItem
        emphasizeStat={`${travelReviewCount}만 개`}
        message="의 여행 리뷰"
      />
      <StatItem
        emphasizeStat={`${travelScheduleCount}만 개`}
        message="의 여행 일정"
      />
    </List>
  )
}

export default StatList
