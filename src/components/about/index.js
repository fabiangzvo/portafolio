import React from 'react'
import { MdLocationOn, MdCake } from "react-icons/md";
import { Grid } from "@material-ui/core";

import Layout from "@components/Layout";
import constants from "./constants";
import { H1, Template, LocationText, AgeText, ResumeText } from "./styles";

const TemplateWrapper = ({ children }) => <section>{children}</section>

const About = props => {
  const { transitionStatus, handleClick, age, name, location, resume } = props

  return (
    <Layout className={transitionStatus} >
      <H1 {...constants.H1_PROPS}>
        {name}
      </H1>
      <Template component={TemplateWrapper}>
        <Grid container>
          <LocationText >
            <MdLocationOn title={constants.LOCATION_LABEL} onClick={handleClick} />
          &ensp;{location}
          </LocationText>
          <AgeText >
            <MdCake />
          &ensp;{age}&nbsp;{constants.AGE_LABEL}
          </AgeText>
        </Grid>
        <ResumeText>
          {resume}
        </ResumeText >
      </Template>
    </Layout >
  )
}


export default About