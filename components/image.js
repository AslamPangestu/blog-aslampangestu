import NextImage from "next/image"
import PropTypes from "prop-types"

import { getMediaURL } from "../lib/media"

const Image = ({ image, className, imageClass, objectFit, layout }) => {
  const src = () => {
    return getMediaURL(image.url)
  }

  return (
    <div className={className}>
      <NextImage
        className={imageClass}
        layout={layout}
        width={image.width}
        height={image.height}
        objectFit={objectFit}
        src={src()}
        alt={image.alternativeText || ""}
      />
    </div>
  )
}

Image.propTypes = {
  image: PropTypes.object,
  className: PropTypes.string,
  imageClass: PropTypes.string,
  objectFit: PropTypes.string,
  layout: PropTypes.string,
}

Image.defaultProps = {
  objectFit: "contain",
  layout: "responsive",
}

export default Image
