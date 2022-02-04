import dynamic from "next/dynamic"
import PropTypes from "prop-types"

const Layout = dynamic(() => import("components/layout"))
const Seo = dynamic(() => import("components/seo"))

import {
  HeroContainer,
  ProjectContainer,
  SkillContainer,
} from "containers/Homepage"

import { fetchAPI } from "lib/api"

const Home = ({ hero, projects, skills }) => {
  return (
    <>
      <Seo />
      <Layout>
        <HeroContainer data={hero} />
        <SkillContainer data={skills} />
        <ProjectContainer data={projects} />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const response = await fetchAPI("/homepage/all")

  return {
    props: {
      hero: {
        fullname: response.homepage.fullName,
        role: response.homepage.currentRole,
        description: response.homepage.description,
        profileImage: response.homepage.profileImage,
        contacts: response.contacts,
      },
      projects: response.projects,
      skills: response.skills,
    },
    revalidate: 1,
  }
}

Home.propTypes = {
  hero: PropTypes.object,
  projects: PropTypes.array,
  skills: PropTypes.array,
}

export default Home
