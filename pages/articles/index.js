import dynamic from "next/dynamic"
// import PropTypes from "prop-types"

// import { fetchAPI } from "lib/api"

const Layout = dynamic(() => import("components/layout"))
const Seo = dynamic(() => import("components/seo"))
const WorkInProgress = dynamic(() => import("components/wip"))

// const Articles = ({ articles }) => {
const Articles = () => {
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

// Articles.propTypes = {
//   articles: PropTypes.array,
// }

export default Articles
