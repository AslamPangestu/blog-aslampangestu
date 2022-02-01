import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const WIP = () => {
  return (
    <div className="my-33.5 flex flex-col justify-center items-center text-black/80 dark:text-white/80">
      <FontAwesomeIcon icon="cog" size="10x" pulse />
      <span className="mt-2 font-bold text-4xl">Work In Progress</span>
    </div>
  )
}

export default WIP
