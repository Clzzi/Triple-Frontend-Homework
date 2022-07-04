import { css } from '@emotion/react'

import ColorPalette from '@/constants/color'

import PlayStoreAward from '../../assets/play-store2x.png'
import AppStoreAward from '../../assets/badge-apple4x.png'
import List from '../common/List'
import Text from '../common/Text'

interface AwardItemProps {
  awardImageUrl: string
  message: string
  awardImageAlt: string
}

const AwardItemCustomStyle = css`
  width: 200px;
  color: ${ColorPalette.black800};
  line-height: 22px;
  & > img {
    width: 64px;
    height: 64px;
  }
`

const AwardItem = ({
  awardImageAlt,
  awardImageUrl,
  message,
}: AwardItemProps) => {
  return (
    <List direction="row" css={AwardItemCustomStyle}>
      <img src={awardImageUrl} alt={awardImageAlt} />
      <Text>{message}</Text>
    </List>
  )
}

const AwardList = () => {
  return (
    <List direction="row">
      <AwardItem
        awardImageAlt="구글 플레이스토어 최우수상 수상"
        awardImageUrl={PlayStoreAward}
        message="2018 구글 플레이스토어 올해의 앱 최우수상 수상"
      />
      <AwardItem
        awardImageAlt="애플 앱스토어 오늘의 여행앱 선정"
        awardImageUrl={AppStoreAward}
        message="2018 애플 앱스토어 오늘의 여행앱 선정"
      />
    </List>
  )
}

export default AwardList
