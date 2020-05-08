import React from 'react'
import { Text, H1, Layout as Template } from "../styles/components";
import { MdLocationOn, MdCake } from "react-icons/md";
import { Layout } from "../components/index";
const About = ({ transitionStatus, entry, exit }) => {
  return (
    <Layout className={transitionStatus} width='100vw' flexDirection='column' bg='blue.0' height='100vh' justifyContent='space-around' alignItems='center' >
      <H1 margin={0} initial={{ y: 32 * 1.2 }}
        animate={{ y: 0 }}
        transition={{
          ease: "easeOut",
          duration: 0.4,
        }}
        fontWeight='bold' fontFamily="'Comfortaa',cursive">
        Fabián Guzmán Otavo 👨‍💻</H1>
      <Template>
        <Text mr='1.5em' fontWeight='unset' fontFamily="'Comfortaa',cursive" ><MdLocationOn /> Quimbaya, Quindio; CO.</Text>
        <Text fontWeight='unset' fontFamily="'Comfortaa',cursive" >< MdCake /> 22 years old.</Text>
      </Template>
      < Text alignItems='center' fontWeight='0' fontFamily="Sans serif" fontSize='calc(0.5em + 1vw)' >
        I'm a full stack developer, passionate about javascript technologies, curious of ml 🤖
        and enthusiastic of react.
      </Text >
    </Layout >
  )
}

export default About

        //<Layout bg='blue.0' color='white.0' className={transitionStatus} height='100vh' paddingLeft='1em' flexDirection='column' alignItems='flex-start' justifyContent='center'>