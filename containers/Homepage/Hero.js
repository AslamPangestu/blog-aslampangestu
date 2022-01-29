import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import NextImage from "components/image"

const HeroSection = ({ data }) => {
  return (
    <div className="py-11 px-40">
      <div className="flex flex-col items-center my-2">
        <NextImage
          image={data.profileImage}
          imageName="rounded-lg"
          className="w-56 h-56"
        />
      </div>
      <div className="flex flex-col items-center text-center">
        <span className="my-2 space-x-4">
          {data.contacts.map((item) => (
            <a
              key={item._id}
              name={`${item.name}-link`}
              href={item.url}
              className="rounded text-red"
            >
              <FontAwesomeIcon icon={["fab", item.iconName]} size="lg" />
            </a>
          ))}
        </span>
        <span className="font-bold text-xl text-black dark:text-white">
          {data.fullname}
        </span>
        <span className="my-2 leading-relaxed text-black dark:text-white">
          {data.description}
        </span>
      </div>
    </div>
  )
}

HeroSection.propTypes = {
  data: PropTypes.object,
}

export default HeroSection
