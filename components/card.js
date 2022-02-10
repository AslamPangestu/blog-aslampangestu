import PropTypes from "prop-types"

const Card = ({ children, className, onClick }) => {
  let classNames = [
    "cursor-pointer border border-black/25 dark:border-white/25",
    className,
  ]
  const joinClassName = classNames.join(" ")
  return (
    <div className={joinClassName} onClick={onClick}>
      {children}
    </div>
  )
}

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onClick: PropTypes.func,
}

export default Card
