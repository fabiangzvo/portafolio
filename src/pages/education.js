import React from 'react'
import { GiGraduateCap } from "react-icons/gi";
import { useStaticQuery, graphql } from "gatsby";
import { List } from "@material-ui/core";

import { H1 } from "../styles/components"
import Layout from "../components/Layout/index";
import EducationCard from "../components/EducationCard";

const query = graphql`
query getEducation {
  allEducationJson {
    nodes {
      title
      entity
      location
      time
    }
  }
}
`

const Education = ({ transitionStatus }) => {

  const { allEducationJson: { nodes: education } } = useStaticQuery(query)

  return (
    <Layout className={transitionStatus} height='100vh' bg='#141414' color='white.0' flexDirection='column' alignItems='flex-start' justifyContent='center' >
      <H1 mb='.5em' initial={{ y: 32 * 1.2 }}
        animate={{ y: 0 }}
        transition={{
          ease: "easeOut",
          duration: 0.4,
        }}
        fontWeight='bold' fontFamily="'Comfortaa',cursive">
        EDUCATION&nbsp;<GiGraduateCap /></H1>
      <List>
        {education.map(item => <EducationCard item={item} />)}
      </List>
    </Layout>
  )
}

export default Education
