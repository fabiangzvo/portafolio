import React from 'react'
import moment from "moment";
import { useStaticQuery, graphql } from "gatsby";

import AboutPage from "@components/about";

const query = graphql`
query getBasicInfo {
  allDataJson {
    nodes {
      resume
      name
      locationUrl
      location
      bornDate
    }
  }
}
`

const About = () => {
  const { allDataJson: { nodes: [basicInfo] } } = useStaticQuery(query)

  const handleClick = () => window.open(basicInfo.locationUrl)

  const currentAge =
    moment().diff(basicInfo.bornDate, "years")

  return <AboutPage handleClick={handleClick} age={currentAge} {...basicInfo} />
}

export default About
