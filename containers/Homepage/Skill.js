import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SkillSection = ({ data }) => {
  const SkillItem = ({ icon, title, description }) => (
    <div className="m-2 lg:m-8 lg:w-64 lg:p-8">
      <span className="my-2 text-red">
        <FontAwesomeIcon icon={icon} size="4x" />
      </span>
      <h2 className="my-2 text-xl font-bold text-black dark:text-white">
        {title}
      </h2>
      <p className="my-2 text-justify text-sm text-black/80 dark:text-white/80">
        {description}
      </p>
    </div>
  )
  return (
    <section id="skill" className="flex flex-col py-11">
      <h1 className="text-center text-4xl font-bold text-black dark:text-white">
        Skills
      </h1>
      <div className="flex flex-row flex-wrap pt-4 lg:justify-center">
        {data.map((item) => (
          <SkillItem
            key={item._id}
            icon={item.iconName}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  )
}

SkillSection.propTypes = {
  data: PropTypes.array,
}

export default SkillSection
