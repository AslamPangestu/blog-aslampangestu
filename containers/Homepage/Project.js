import PropTypes from "prop-types"

const ProjectSection = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Project Section</h1>
    </div>
  )
}

ProjectSection.propTypes = {
  data: PropTypes.array,
}

export default ProjectSection
