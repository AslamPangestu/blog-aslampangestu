import PropTypes from "prop-types"

import Layout from "../components/layout"
import Seo from "../components/seo"

import {
  HeroContainer,
  ProjectContainer,
  SkillContainer,
} from "../containers/Homepage"

import { fetchAPI } from "../lib/api"

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
