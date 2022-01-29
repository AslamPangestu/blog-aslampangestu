import PropTypes from "prop-types"

import NextImage from "components/image"

const ProjectSection = ({ data, testImage }) => {
  const ProjectItem = ({ image, title, description }) => {
    const shorterDescription = (text = "") => {
      let finalText = text
      if (text.length >= 100) {
        const splitText = text.split(" ")
        finalText = splitText.slice(16).join(" ")
      }
      return `${finalText} ...`
    }
    return (
      <div className="m-8 w-72 border rounded-xl border-black/80 dark:border-white/80 cursor-pointer">
        <div className="flex flex-col">
          <NextImage image={testImage} />
        </div>
        <div className="px-8 py-4">
          <h2 className="mb-2 font-bold text-xl text-black dark:text-white">
            {title}
          </h2>
          <span className="text-sm text-justify text-black/80 dark:text-white/80">
            {shorterDescription(description)}
          </span>
        </div>
      </div>
    )
  }
  return (
    <div className="flex flex-col py-11">
      <h1 className="font-bold text-4xl text-black dark:text-white text-center">
        Projects
      </h1>
      <div className="flex flex-row justify-center flex-wrap py-4">
        {data.map((item) => (
          <ProjectItem
            key={item._id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  )
}

ProjectSection.propTypes = {
  data: PropTypes.array,
  testImage: PropTypes.object,
}

export default ProjectSection
