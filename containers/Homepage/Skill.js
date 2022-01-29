import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SkillSection = ({ data }) => {
  const SkillItem = ({ icon, title, description }) => (
    <div className="m-8 p-8 w-64">
      <span className="my-2 text-red">
        <FontAwesomeIcon icon={icon} size="4x" />
      </span>
      <h2 className="my-2 font-bold text-xl text-black dark:text-white">
        {title}
      </h2>
      <span className="my-2 text-sm text-justify text-black/80 dark:text-white/80">
        {description}
      </span>
    </div>
  )
  return (
    <div className="flex flex-col py-11">
      <h1 className="font-bold text-4xl text-black dark:text-white text-center">
        Skills
      </h1>
      <div className="flex flex-row justify-center flex-wrap py-4">
        {data.map((item) => (
          <SkillItem
            key={item._id}
            icon={item.iconName}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  )
}

SkillSection.propTypes = {
  data: PropTypes.array,
}

export default SkillSection
