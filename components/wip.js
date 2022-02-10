import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const WIP = () => {
  return (
    <div className="my-33.5 flex flex-col items-center justify-center text-black/80 dark:text-white/80">
      <FontAwesomeIcon icon="cog" size="10x" pulse />
      <span className="mt-2 text-4xl font-bold">Work In Progress</span>
    </div>
  )
}

export default WIP
