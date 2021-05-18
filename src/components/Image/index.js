import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Img } from "./style";
import { motion } from "framer-motion";

const queryImage = graphql`
query {
  file(relativePath: { eq: "profile.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const Image = () => {
  const data = useStaticQuery(queryImage)

  return (
    <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ ease: "easeIn", duration: .5 }}>
      <Img fluid={data.file.childImageSharp.fluid} border='.5rem solid hsla(0,0%,100%,.2)' width='10rem' heigth='10rem' borderRadius='10em' />
    </motion.div >)
}

export default Image
