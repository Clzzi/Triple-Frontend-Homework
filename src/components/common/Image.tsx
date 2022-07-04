interface Props {
  width: number
  height: number
  imageSrc: string
  imageAlt: string
}

const Image = ({ height, imageAlt, imageSrc, width }: Props) => {
  return <img alt={imageAlt} src={imageSrc} width={width} height={height} />
}

export default Image
