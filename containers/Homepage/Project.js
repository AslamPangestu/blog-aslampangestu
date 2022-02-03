import { useState } from "react"
import dynamic from "next/dynamic"
import PropTypes from "prop-types"

const NextImage = dynamic(() => import("components/image"))
const Card = dynamic(() => import("components/card"))
const Modal = dynamic(() => import("components/modal"))
const Button = dynamic(() => import("components/button"))

const ProjectSection = ({ data }) => {
  const [modalData, setModalData] = useState(null)

  const projectYear = (start, end) => {
    const yearEnd = !end ? "Now" : end
    return ` (${start} - ${yearEnd})`
  }

  const showModal = (data = null) => {
    setModalData(data)
    showHideScrollBar(data)
  }

  const showHideScrollBar = (data) => {
    if (data) {
      document.documentElement.classList.add("overflow-hidden")
    } else {
      document.documentElement.classList.remove("overflow-hidden")
    }
  }

  const ProjectModal = ({ onClose }) => {
    const SUBHEADERS = [
      { label: "Client", value: modalData.clientName },
      {
        label: "As",
        value: `${modalData.workPlace.name} (${modalData.projectCategory.name})`,
      },
      { label: "Role", value: modalData.projectRole.name },
    ]
    return (
      <Modal onClose={onClose} showClose={true}>
        <div className="bg-white dark:bg-black relative">
          <div className="flex flex-col border-b border-black/25 dark:border-white/25">
            <NextImage image={modalData.image} />
          </div>
          <div className="p-4">
            <div className="flex flex-row justify-between items-center">
              <h2 className="font-bold text-xl text-black dark:text-white">
                {modalData.title}
                <span className="text-xs text-black/80 dark:text-white/80">
                  {projectYear(modalData.yearStart, modalData.yearEnd)}
                </span>
              </h2>
              {modalData.url && (
                <Button
                  name="close"
                  className="text-green hover:bg-black/10 dark:hover:bg-white/10  rounded-lg"
                  icon="globe"
                  iconSize="lg"
                  link={modalData.url}
                  type="link"
                >
                  Visit
                </Button>
              )}
            </div>
            <table className="my-2">
              <tbody>
                {SUBHEADERS.map((item) => (
                  <tr key={item.label}>
                    <td className="text-sm font-bold text-black/80 dark:text-white/80">
                      {item.label}
                    </td>
                    <td className="text-sm text-black/80 dark:text-white/80 px-2">
                      :
                    </td>
                    <td className="text-sm text-black/80 dark:text-white/80">
                      {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-sm text-black/80 dark:text-white/80 text-justify whitespace-pre-wrap">
              {modalData.description}
            </p>
          </div>
        </div>
      </Modal>
    )
  }

  const ProjectItem = ({ data, onClick }) => {
    const { image, title, clientName } = data

    return (
      <Card
        className="m-8 inline-block rounded-lg sm:max-w-lg w-72"
        onClick={onClick}
      >
        <div className="flex flex-col relative border-b border-black/25 dark:border-white/25">
          <NextImage
            image={image}
            imageClass="rounded-t-lg"
            className="w-72 h-72"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-4">
          <h2 className="font-bold text-xl text-black dark:text-white">
            {title}
            <span className="text-xs text-black/80 dark:text-white/80">
              {projectYear(data.yearStart, data.yearEnd)}
            </span>
          </h2>
          <span className="text-sm text-black/80 dark:text-white/80">
            {clientName}
          </span>
        </div>
      </Card>
    )
  }

  return (
    <section id="project" className="flex flex-col py-11">
      <h1 className="font-bold text-4xl text-black dark:text-white text-center">
        Latest Project
      </h1>
      <div className="flex flex-row justify-center flex-wrap py-4">
        {data.map((item) => (
          <ProjectItem
            key={item._id}
            data={item}
            onClick={() => showModal(item)}
          />
        ))}
      </div>
      {modalData && <ProjectModal onClose={() => showModal()} />}
    </section>
  )
}

ProjectSection.propTypes = {
  data: PropTypes.array,
}

export default ProjectSection
