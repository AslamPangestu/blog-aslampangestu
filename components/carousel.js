import PropTypes from "prop-types"

import Slider from "react-slick"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Carousel = ({ children }) => {
  const CustomArrow = (props) => {
    const { className, onClick } = props
    const icon = className.includes("slick-prev")
      ? "chevron-left"
      : "chevron-right"
    const joinClassName = `${className} rounded-full hover:bg-black/10 dark:hover:bg-white/10 text-black dark:text-white`
    return (
      <div className={joinClassName} onClick={onClick}>
        <FontAwesomeIcon icon={icon} size="lg" />
      </div>
    )
  }
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <CustomArrow />,
    prevArrow: <CustomArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
          infinite: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          infinite: false,
        },
      },
    ],
  }
  return <Slider {...settings}>{children}</Slider>
}

Carousel.propTypes = {
  children: PropTypes.PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default Carousel
