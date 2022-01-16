import Link from "next/link"
import PropTypes from "prop-types"

const Card = ({ article }) => {
  return <Link href={`/article/${article.slug}`}>Card</Link>
}

Card.propTypes = {
  data: PropTypes.object,
}

export default Card
