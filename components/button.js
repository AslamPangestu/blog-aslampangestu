import Link from "next/link"
import { useRouter } from "next/router"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const validURL = (str) => {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ) // fragment locator
  return !!pattern.test(str)
}

const Button = ({
  className,
  name,
  type,
  icon,
  iconSize,
  link,
  children,
  onClick,
}) => {
  let classNames = ["py-2 px-4", className]
  const router = useRouter()

  if (type === "link") {
    const isActive = router.pathname === link
    if (isActive) {
      classNames.push("underline font-bold")
      const joinClassName = classNames.join(" ")
      return (
        <div name={`${name}-link`} className={joinClassName}>
          {icon && <FontAwesomeIcon icon={icon} size={iconSize} />}
          {children}
        </div>
      )
    }
    classNames.push("hover:underline hover:font-bold")
    const joinClassName = classNames.join(" ")
    if (validURL(link)) {
      return (
        <a name={`${name}-link`} href={link} className={joinClassName}>
          {icon && <FontAwesomeIcon icon={icon} size={iconSize} />}
          {children}
        </a>
      )
    }
    return (
      <Link name={`${name}-link`} href={link}>
        <a className={joinClassName}>
          {icon && <FontAwesomeIcon icon={icon} size={iconSize} />}
          {children}
        </a>
      </Link>
    )
  }
  const joinClassName = classNames.join(" ")
  return (
    <button
      name={`${name}-button`}
      className={joinClassName}
      type={type}
      onClick={onClick}
    >
      {icon && <FontAwesomeIcon icon={icon} size={iconSize} />}
      {children}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  iconSize: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  type: PropTypes.string,
  link: PropTypes.string,
  children: PropTypes.PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onClick: PropTypes.func,
}

Button.defaultProps = {
  className: "",
  iconSize: "md",
  icon: "",
  type: "button",
  link: "",
}

export default Button
