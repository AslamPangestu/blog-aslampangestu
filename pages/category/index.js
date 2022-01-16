import PropTypes from "prop-types"

import { fetchAPI } from "../../lib/api"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const Category = ({ categories }) => {
  return (
    <>
      <Seo />
      <Layout>
        <div>
          <h1>Categories</h1>
        </div>
        <div>Content</div>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const categories = await fetchAPI("/article-category")

  return {
    props: { categories },
    revalidate: 1,
  }
}

Category.propTypes = {
  categories: PropTypes.array,
}

export default Category
