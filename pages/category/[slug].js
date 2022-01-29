import { fetchAPI } from "lib/api"
import Layout from "components/layout"
import Seo from "components/seo"

const Category = ({ category }) => {
  const seo = {
    metaTitle: category.name,
    metaDescription: `All ${category.name} articles`,
  }

  return (
    <>
      <Seo seo={seo} />
      <Layout>
        <div>
          <h1>Category Name</h1>
          <div>Articles</div>
        </div>
      </Layout>
    </>
  )
}

export const getStaticPaths = async () => {
  const categories = await fetchAPI("/article-category")

  return {
    paths: categories.map((category) => ({
      params: {
        slug: category.slug,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const category = (await fetchAPI(`/article-category?slug=${params.slug}`))[0]

  return {
    props: { category },
    revalidate: 1,
  }
}

export default Category
