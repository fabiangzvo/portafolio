import React from "react"
import { Grid } from "@material-ui/core";

import Layout from "@components/Layout";

import { HomeLayout, Name } from "../styles/components"
import SEO from "../components/seo"
import { Terminal } from "../components/index"
import { FiChevronsDown } from "react-icons/fi"
import { Image } from "../components/index"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const IndexPage = ({ transitionStatus = '' }) => {
  return (
    <Layout container className={["background ", transitionStatus]} >
      <SEO title="Home" />
      <HomeLayout item >
        <Image />
        <Name animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ ease: "easeIn", duration: 2 }} opacity='0' color='white.0' fontSize='calc(2em + 1vw)' marginTop='.8em' fontWeight='unset' fontFamily="'Balsamiq Sans', cursive">Hi, my name is</Name>
        <Name animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ ease: "easeIn", duration: 2 }} color='white'>Fabián Guzmán Otavo.</Name>
        <Terminal />
      </HomeLayout>
      <Grid container justify='center'>
        <AniLink swipe duration={2} top="exit" entryOffset={80} direction="down" to='/about'>
          <FiChevronsDown fontSize='3em' />
        </AniLink>
      </Grid>
    </Layout >
  )
}

export default IndexPage
