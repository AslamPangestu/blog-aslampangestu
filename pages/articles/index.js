import dynamic from "next/dynamic"
import PropTypes from "prop-types"

// import { fetchAPI } from "lib/api"

const Layout = dynamic(() => import("components/layout"))
const Seo = dynamic(() => import("components/seo"))
const WorkInProgress = dynamic(() => import("components/wip"))

const Article = ({ articles }) => {
  return (
    <>
      <Seo />
      <Layout>
        <WorkInProgress />
      </Layout>
    </>
  )
}

// export const getStaticProps = async () => {
//   const articles = await fetchAPI(`/articles`)

//   return {
//     props: { articles },
//     revalidate: 1,
//   }
// }

Article.propTypes = {
  articles: PropTypes.array,
}

export default Article
