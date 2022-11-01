// import { fetchAPI } from "lib/api"

import Layout from "components/layout"
import Seo from "components/seo"

const Article = () => {
  // const Article = ({ article }) => {
  // const seo = {
  //   metaTitle: article.title,
  //   metaDescription: article.description,
  //   shareImage: article.image,
  //   article: true,
  // }

  return (
    <>
      <Seo />
      {/* <Seo seo={seo} /> */}
      <Layout>
        <div>
          <h1>Title</h1>
        </div>
        <div>Content</div>
      </Layout>
    </>
  )
}

// export const getStaticPaths = async () => {
//   const articles = await fetchAPI("/articles")

//   return {
//     paths: articles.data.map((item) => ({
//       params: {
//         slug: item.slug,
//       },
//     })),
//     fallback: false,
//   }
// }

// export const getStaticProps = async ({ params }) => {
//   const articles = await fetchAPI(`/articles?slug=${params.slug}`)

//   return {
//     props: { article: articles.data[0] },
//     revalidate: 1,
//   }
// }

export default Article
