import NextImage from "next/image"
import PropTypes from "prop-types"

import { getMediaURL } from "../lib/media"

const Image = ({ image, className, imageName }) => {
  const src = () => {
    return getMediaURL(image.url)
  }

  return (
    <div className={className}>
      <NextImage
        className={imageName}
        layout="responsive"
        width={image.width}
        height={image.height}
        objectFit="contain"
        src={src()}
        alt={image.alternativeText || ""}
      />
    </div>
  )
}

Image.propTypes = {
  image: PropTypes.object,
  className: PropTypes.string,
  imageName: PropTypes.string,
}

export default Image
