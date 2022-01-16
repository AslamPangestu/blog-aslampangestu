import PropTypes from "prop-types"

import { fetchAPI } from "../../lib/api"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const Article = ({ articles }) => {
  return (
    <>
      <Seo />
      <Layout>
        <div>
          <h1>Articles</h1>
        </div>
        <div>Content</div>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const articles = await fetchAPI(`/articles`)

  return {
    props: { articles },
    revalidate: 1,
  }
}

Article.propTypes = {
  articles: PropTypes.array,
}

export default Article
