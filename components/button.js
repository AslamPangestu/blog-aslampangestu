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
  activeColor,
  inactiveColor,
  name,
  type,
  icon,
  iconPosition,
  iconSize,
  link,
  children,
  onClick,
}) => {
  let classNames = ["py-2 px-4", className]
  const router = useRouter()

  if (type === "link") {
    const isActive = router.pathname === link
    classNames.push("font-bold")
    if (isActive) {
      classNames.push(activeColor)
      const joinClassName = classNames.join(" ")
      return (
        <div name={`${name}-link`} className={joinClassName}>
          {icon && iconPosition === "left" && (
            <FontAwesomeIcon icon={icon} size={iconSize} />
          )}
          {children && <span className="px-2">{children}</span>}
          {icon && iconPosition === "right" && (
            <FontAwesomeIcon icon={icon} size={iconSize} />
          )}
        </div>
      )
    }
    classNames.push(inactiveColor)
    const joinClassName = classNames.join(" ")
    if (validURL(link)) {
      return (
        <a
          name={`${name}-link`}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={joinClassName}
        >
          {icon && iconPosition === "left" && (
            <FontAwesomeIcon icon={icon} size={iconSize} />
          )}
          {children && <span className="px-2">{children}</span>}
          {icon && iconPosition === "right" && (
            <FontAwesomeIcon icon={icon} size={iconSize} />
          )}
        </a>
      )
    }
    return (
      <Link name={`${name}-link`} href={link}>
        <a className={joinClassName}>
          {icon && iconPosition === "left" && (
            <FontAwesomeIcon icon={icon} size={iconSize} />
          )}
          {children && <span className="px-2">{children}</span>}
          {icon && iconPosition === "right" && (
            <FontAwesomeIcon icon={icon} size={iconSize} />
          )}
        </a>
      </Link>
    )
  }
  const joinClassName = classNames.join(" ")
  return (
    <button
      name={`${name}-button`}
      aria-label={`${name}-button`}
      className={joinClassName}
      type={type}
      onClick={onClick}
    >
      {icon && iconPosition === "left" && (
        <FontAwesomeIcon icon={icon} size={iconSize} />
      )}
      {children && <span className="px-2">{children}</span>}
      {icon && iconPosition === "right" && (
        <FontAwesomeIcon icon={icon} size={iconSize} />
      )}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  activeColor: PropTypes.string,
  inactiveColor: PropTypes.string,
  iconSize: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  iconPosition: PropTypes.string,
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
  activeColor: "",
  inactiveColor: "",
  iconSize: "xs",
  icon: "",
  iconPosition: "left",
  type: "button",
  link: "",
}

export default Button
