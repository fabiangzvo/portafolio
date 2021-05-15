import React from 'react'
import { H1, Text } from "../styles/components"
import { GiLighthouse } from "react-icons/gi";
import Layout from "../components/Layout/index";

const Interests = ({ transitionStatus }) => {
  return (
    <Layout className={transitionStatus} height='100vh' bg='#41424c' color='white.0' flexDirection='column' alignItems='flex-start' justifyContent='center' >
      <H1 mb='.5em' initial={{ y: 32 * 1.2 }}
        animate={{ y: 0 }}
        transition={{
          ease: "easeOut",
          duration: 0.4,
        }}
        fontINTERESTSt='bold' fontFamily="'Comfortaa',cursive">
        INTERESTS&nbsp;
        <GiLighthouse /></H1>
      <Text fontFamily="'Comfortaa',cursive">Apart from being a web developer, i enjoy running outdoors,
       listen music, view movies and learn new technologies.</Text>
    </Layout>
  )
}

export default Interests
