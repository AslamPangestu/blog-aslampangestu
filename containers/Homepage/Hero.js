import dynamic from "next/dynamic"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const NextImage = dynamic(() => import("components/image"))

const HeroSection = ({ data }) => {
  return (
    <section id="hero" className="py-11 lg:px-40">
      <div className="flex flex-col items-center my-2">
        <NextImage
          image={data.profileImage}
          imageClass="rounded-lg"
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
              aria-label={`${item.name}-link`}
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
    </section>
  )
}

HeroSection.propTypes = {
  data: PropTypes.object,
}

export default HeroSection
