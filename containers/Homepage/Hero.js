import dynamic from "next/dynamic"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const NextImage = dynamic(() => import("components/image"))

const HeroSection = ({ data }) => {
  return (
    <section id="hero" className="py-11 lg:px-40">
      <div className="my-2 flex flex-col items-center">
        <NextImage
          image={data.profileImage}
          imageClass="rounded-lg"
          className="h-56 w-56"
          format="medium"
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
        <h1 className="text-2xl font-bold text-black dark:text-white">
          {data.fullname}
        </h1>
        <h2 className="text-lg text-black dark:text-white">{data.role}</h2>
        <div className="flex flex-row 2xl:justify-center">
          <div />
          <p className="my-2 max-w-4xl leading-relaxed text-black dark:text-white">
            {data.description}
          </p>
          <div />
        </div>
      </div>
    </section>
  )
}

HeroSection.propTypes = {
  data: PropTypes.object,
}

export default HeroSection
