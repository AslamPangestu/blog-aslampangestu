import dynamic from "next/dynamic"
import PropTypes from "prop-types"

import { slidesToShowPlugin, arrowsPlugin } from "@brainhubeu/react-carousel"
const BrainhubeuCarousel = dynamic(() => import("@brainhubeu/react-carousel"), {
  ssr: false,
})

const Button = dynamic(() => import("components/button"))

const Carousel = ({ children }) => {
  const CustomArrow = ({ position }) => {
    const icon = position === "left" ? "chevron-left" : "chevron-right"
    return (
      <Button
        name={`${position}Arrow`}
        className="rounded-full hover:bg-black/10 dark:hover:bg-white/10 text-black dark:text-white"
        icon={icon}
        iconSize="sm"
      />
    )
  }

  return (
    <>
      <BrainhubeuCarousel
        plugins={[
          "infinite",
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 3,
            },
          },
          {
            resolve: arrowsPlugin,
            options: {
              arrowLeft: <CustomArrow position="left" />,
              arrowRight: <CustomArrow position="right" />,
              addArrowClickHandler: true,
            },
          },
        ]}
      >
        {children}
      </BrainhubeuCarousel>
    </>
  )
}

Carousel.propTypes = {
  children: PropTypes.PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default Carousel
