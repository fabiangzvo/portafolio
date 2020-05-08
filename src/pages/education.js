import React from 'react'
import { GiDiploma, GiGraduateCap } from "react-icons/gi";
import { useStaticQuery, graphql } from "gatsby";
import { List, ListItem, ListItemText, ListItemAvatar } from "@material-ui/core";

import { H1, Text } from "../styles/components"
import Layout from "../components/Layout/index";

const query = graphql`
query getEducation {
  allEducationJson {
    nodes {
      title
      entity
      location
      year
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
        {education.map(item => <ListItem>
          <ListItemAvatar>
            <GiDiploma />
          </ListItemAvatar><ListItemText primary={item.title} secondary={item.entity} /></ListItem>)}
      </List>

      <Text lineHeight='2em' alignItems='center' fontFamily="'Comfortaa',cursive" ><GiDiploma /> &nbsp;7 approved semesters of ing. software in the EAM university.</Text>
      <Text lineHeight='2em' alignItems='center' fontFamily="'Comfortaa',cursive" ><GiDiploma /> &nbsp;Professional technician in software development, EAM 2019.</Text>
      <Text lineHeight='2em' alignItems='center' fontFamily="'Comfortaa',cursive" ><GiDiploma /> &nbsp;Professional technician in software development, sena 2015.</Text>
      <Text lineHeight='2em' alignItems='center' fontFamily="'Comfortaa',cursive" ><GiDiploma /> &nbsp;high school - policarpa salavarrieta educational institution - Quimbaya,Quindio 2015.</Text>
      <Text lineHeight='2em' alignItems='center' fontFamily="'Comfortaa',cursive" ><GiDiploma /> &nbsp;Primary school - holy spirit educational institution - Quimbaya,Quindio 2008. </Text>
    </Layout>
  )
}

export default Education
