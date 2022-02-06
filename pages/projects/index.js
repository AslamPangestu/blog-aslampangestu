import dynamic from "next/dynamic"
// import PropTypes from "prop-types"

// import { fetchAPI } from "lib/api"

const Layout = dynamic(() => import("components/layout"))
const Seo = dynamic(() => import("components/seo"))
const WorkInProgress = dynamic(() => import("components/wip"))

// const Projects = ({ projects }) => {
const Projects = () => {
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
//   const projects = await fetchAPI(`/projects`)

//   return {
//     props: { projects },
//     revalidate: 1,
//   }
// }

// Projects.propTypes = {
//   projects: PropTypes.array,
// }

export default Projects
