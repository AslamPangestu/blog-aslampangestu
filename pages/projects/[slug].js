import { fetchAPI } from "lib/api"

import Layout from "components/layout"
import Seo from "components/seo"

const Project = ({ projects }) => {
  const seo = {
    metaTitle: projects.title,
    metaDescription: projects.description,
    shareImage: projects.image,
    article: false,
  }

  return (
    <>
      <Seo seo={seo} />
      <Layout>
        <div>
          <h1>Title</h1>
        </div>
        <div>Content</div>
      </Layout>
    </>
  )
}

export const getStaticPaths = async () => {
  const projects = await fetchAPI("/projects")

  return {
    paths: projects.data.map((item) => ({
      params: {
        slug: item.slug,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const projects = await fetchAPI(`/projects?slug=${params.slug}`)

  return {
    props: { projects: projects.data[0] },
    revalidate: 1,
  }
}

export default Project
