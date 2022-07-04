import { css } from '@emotion/react'

import ColorPalette from '@/constants/color'
import Bold from '@/styles/Bold'

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
  line-height: 22px;
  text-align: center;
  align-items: center;
  color: ${ColorPalette.black800};
  justify-content: space-between;
  & .awardImage {
    width: 54px;
    height: 54px;
  }
`

const AwardListCustomStyle = css`
  width: 100%;
  margin-top: 50px;
  justify-content: space-between;
`

const AwardItem = ({
  awardImageAlt,
  awardImageUrl,
  message,
}: AwardItemProps) => {
  return (
    <List direction="row" css={AwardItemCustomStyle}>
      <img className="awardImage" src={awardImageUrl} alt={awardImageAlt} />
      <Text>
        <Bold>{message}</Bold>
      </Text>
    </List>
  )
}

const AwardList = () => {
  return (
    <List direction="row" css={AwardListCustomStyle}>
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
