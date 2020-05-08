import React from "react"
import { Grid } from "@material-ui/core";

import { Layout, Name } from "../styles/components"
import SEO from "../components/seo"
import { Terminal } from "../components/index"
import { FiChevronsDown } from "react-icons/fi"
import { Image } from "../components/index"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const IndexPage = ({ transitionStatus = '' }) => {
  return (
    <Layout container className={"background ".concat(transitionStatus)} width='100vw' flexDirection='column' bg='blue.0' height='100vh' justifyContent='space-around' alignItems='center' >
      <SEO title="Home" />
      <Layout item flexDirection='column' alignItems='center' >
        <Image />
        <Name animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ ease: "easeIn", duration: 2 }} opacity='0' color='white.0' fontSize='calc(2em + 1vw)' marginTop='.8em' fontWeight='unset' fontFamily="'Balsamiq Sans', cursive">Hi, my name is</Name>
        <Name animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ ease: "easeIn", duration: 2 }} color='white'>Fabián Guzmán Otavo.</Name>
      </Layout>
      <Terminal />
      <Grid item>
        <AniLink swipe duration={2} top="exit" entryOffset={80} direction="down" to='/about'>
          <FiChevronsDown fontSize='3em' />
        </AniLink>
      </Grid>
    </Layout >
  )
}

export default IndexPage
