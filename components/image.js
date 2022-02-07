import NextImage from "next/image"
import PropTypes from "prop-types"

import { getMediaURL } from "lib/media"

const Image = ({ image, className, imageClass, objectFit, layout, format }) => {
  const src = () => {
    const imageURL = () => {
      if (format === "default") {
        return image.url
      }
      return image.formats[format]
    }
    return getMediaURL(imageURL())
  }
  const translateSize = () => {
    if (layout === "fill") return { width: null, height: null }
    return { width: image.width, height: image.height }
  }

  return (
    <div className={className}>
      <NextImage
        className={imageClass}
        layout={layout}
        width={translateSize().width}
        height={translateSize().height}
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
  objectFit: PropTypes.oneOf([
    "contain",
    "cover",
    "fill",
    "none",
    "scale-down",
  ]),
  layout: PropTypes.oneOf(["intrinsic ", "fixed", "responsive", "fill"]),
  format: PropTypes.oneOf(["default", "thumbnail", "large", "medium", "small"]),
}

Image.defaultProps = {
  objectFit: "contain",
  layout: "responsive",
  format: "default",
}

export default Image
