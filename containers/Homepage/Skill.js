import PropTypes from "prop-types"

const SkillSection = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Skill Section</h1>
    </div>
  )
}

SkillSection.propTypes = {
  data: PropTypes.array,
}

export default SkillSection
