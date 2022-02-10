import { useState } from "react"
import dynamic from "next/dynamic"
import PropTypes from "prop-types"

const NextImage = dynamic(() => import("components/image"))
const Card = dynamic(() => import("components/card"))
const Modal = dynamic(() => import("components/modal"))
const Button = dynamic(() => import("components/button"))
const Carousel = dynamic(() => import("components/carousel"))

const ProjectSection = ({ data }) => {
  const [modalData, setModalData] = useState(null)

  const projectYear = (start, end) => {
    const yearEnd = end === 9999 ? "Now" : end
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
    const ProjectAs = () => {
      if (modalData.workPlace.name === "Personal") {
        return modalData.projectCategory.name
      }
      return `${modalData.workPlace.name} (${modalData.projectCategory.name})`
    }
    const SUBHEADERS = [
      { label: "Client", value: modalData.clientName },
      {
        label: "As",
        value: ProjectAs(),
      },
      { label: "Role", value: modalData.projectRole.name },
    ]
    return (
      <Modal onClose={onClose} showClose={true}>
        <div className="relative bg-white dark:bg-black">
          <div className="flex flex-col border-b border-black/25 dark:border-white/25">
            <NextImage image={modalData.image} format="large" />
          </div>
          <div className="p-4">
            <div className="flex flex-row items-center justify-between">
              <h2 className="text-xl font-bold text-black dark:text-white">
                {modalData.title}
                <span className="text-xs text-black/80 dark:text-white/80">
                  {projectYear(modalData.yearStart, modalData.yearEnd)}
                </span>
              </h2>
              {modalData.url && (
                <Button
                  name="close"
                  className="rounded-lg text-green hover:bg-black/10 dark:hover:bg-white/10"
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
                    <td className="px-2 text-sm text-black/80 dark:text-white/80">
                      :
                    </td>
                    <td className="text-sm text-black/80 dark:text-white/80">
                      {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="whitespace-pre-wrap text-justify text-sm text-black/80 dark:text-white/80">
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
      <Card className="mx-4 rounded-lg" onClick={onClick}>
        <div className="relative flex flex-col border-b border-black/25 dark:border-white/25">
          <NextImage
            image={image}
            imageClass="rounded-t-lg"
            className="relative h-72"
            layout="fill"
            objectFit="cover"
            format="medium"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold text-black dark:text-white">
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
      <h1 className="text-center text-4xl font-bold text-black dark:text-white">
        Latest Project
      </h1>
      <div className="mt-12 lg:flex lg:flex-row lg:justify-center">
        <div className="lg:max-w-4xl">
          <Carousel>
            {data.map((item) => (
              <ProjectItem
                key={item._id}
                data={item}
                onClick={() => showModal(item)}
              />
            ))}
          </Carousel>
        </div>
      </div>
      <Button
        name="allProject"
        className="mt-4 rounded-lg text-center text-red hover:bg-black/10 dark:hover:bg-white/10"
        link="/projects"
        type="link"
      >
        See All Project
      </Button>
      {modalData && <ProjectModal onClose={() => showModal()} />}
    </section>
  )
}

ProjectSection.propTypes = {
  data: PropTypes.array,
}

export default ProjectSection
