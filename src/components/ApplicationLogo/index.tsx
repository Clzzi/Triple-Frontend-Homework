import { css } from '@emotion/react'

import TripleLogo from '@/assets/triple2x.png'
import ColorPalette from '@/constants/color'

import Image from '../common/Image'
import List from '../common/List'
import Text from '../common/Text'

const ApplicationLogoCustomStyle = css`
  position: relative;
  color: ${ColorPalette.black700};
  & > span {
    top: 85%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
  }
`

const ApplicationLogo = () => {
  return (
    <List direction="column" css={ApplicationLogoCustomStyle}>
      <Image
        imageSrc={TripleLogo}
        imageAlt="트리플 로고"
        width={400}
        height={338}
      />
      <Text fontSize="15px">2021년 12월 기준</Text>
    </List>
  )
}

export default ApplicationLogo
