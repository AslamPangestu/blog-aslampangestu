import { fetchAPI } from "lib/api"

import Layout from "components/layout"
import Seo from "components/seo"

const Project = ({ article }) => {
  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
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
    paths: projects.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const projects = await fetchAPI(`/projects?slug=${params.slug}`)

  return {
    props: { article: projects[0] },
    revalidate: 1,
  }
}

export default Project
