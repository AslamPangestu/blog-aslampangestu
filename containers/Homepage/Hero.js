import PropTypes from "prop-types"

import NextImage from "../../components/image"
import Button from "../../components/button"

const HeroSection = ({ data }) => {
  return (
    <div className="py-16 px-64">
      <div className="flex flex-col items-center my-2">
        <NextImage
          image={data.profileImage}
          imageName="rounded-lg"
          className="w-56 h-56"
        />
      </div>
      <div className="flex flex-col items-center text-center">
        <span className="my-2 space-x-2">
          {data.contacts.map((item) => (
            <Button
              className="rounded bg-white dark:bg-black hover:bg-black/10 dark:hover:bg-black/75 text-red-800"
              key={item._id}
              link={item.url}
              type="link"
              icon={["fab", item.iconName]}
              iconSize="lg"
              name={item.name}
            />
          ))}
        </span>
        <span className="font-bold text-xl">{data.fullname}</span>
        <span className="my-2 leading-relaxed">{data.description}</span>
      </div>
    </div>
  )
}

HeroSection.propTypes = {
  data: PropTypes.object,
}

export default HeroSection
