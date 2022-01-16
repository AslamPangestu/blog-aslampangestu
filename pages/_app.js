import { createContext } from "react"
import App from "next/app"
import Head from "next/head"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"

import "../assets/css/style.css"

import { fetchAPI } from "../lib/api"
import { getMediaURL } from "../lib/media"

// Store Strapi Global object in context
export const GlobalContext = createContext({})

library.add(faSun, faMoon, faLinkedin, faInstagram)

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps

  return (
    <>
      <Head>
        <link rel="shortcut icon" href={getMediaURL(global.favicon)} />
      </Head>
      <GlobalContext.Provider value={global}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx)
  // Fetch global site settings from Strapi
  const global = await fetchAPI("/global")
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global } }
}

export default MyApp
