import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Img } from "./style";
import { motion } from "framer-motion";
/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (<motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ ease: "easeIn", duration: .5 }}><Img fluid={data.file.childImageSharp.fluid} border='.5rem solid hsla(0,0%,100%,.2)' width='10rem' heigth='10rem' borderRadius='10em' /></motion.div >)
}

export default Image
