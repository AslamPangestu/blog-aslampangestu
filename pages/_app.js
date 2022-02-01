import { createContext } from "react"
import dynamic from "next/dynamic"
import App from "next/app"
import Head from "next/head"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faSun,
  faMoon,
  faServer,
  faMobileAlt,
  faDesktop,
  faTimes,
  faGlobe,
  faCog,
  faBars,
} from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"

import "assets/css/style.css"

import { fetchAPI } from "lib/api"
import { getMediaURL } from "lib/media"

// https://dev.to/vvo/show-a-top-progress-bar-on-fetch-and-router-events-in-next-js-4df3
const TopProgressBar = dynamic(
  () => {
    return import("components/nprogress")
  },
  { ssr: false }
)

// Store Strapi Global object in context
export const GlobalContext = createContext({})

library.add(
  faSun,
  faMoon,
  faLinkedin,
  faInstagram,
  faServer,
  faMobileAlt,
  faDesktop,
  faTimes,
  faGlobe,
  faCog,
  faBars
)

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps

  return (
    <>
      <Head>
        <link rel="shortcut icon" href={getMediaURL(global.favicon)} />
      </Head>
      <GlobalContext.Provider value={global}>
        <TopProgressBar />
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
