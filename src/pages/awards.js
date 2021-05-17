import React from 'react'
import { H1, Text } from "../styles/components"
import { GiTrophyCup, GiRibbonMedal } from "react-icons/gi";
import Layout from "../components/Layout/index";

const Awards = ({ transitionStatus }) => (
  <Layout className={transitionStatus}>
    <H1 mb='.5em' initial={{ y: 32 * 1.2 }}
      animate={{ y: 0 }}
      transition={{
        ease: "easeOut",
        duration: 0.4,
      }}
      fontWeight='bold' fontFamily="'Comfortaa',cursive">
      AWARDS & CERTIFICATIONS&nbsp;<GiRibbonMedal /></H1>
    <Text lineHeight='1.8em' fontFamily="'Comfortaa',cursive" alignItems='center' ><GiTrophyCup />&nbsp;1st place - Ias software and university autonomous of manizales - Hackathon, 07 Marzo de 2020.</Text>
    <Text lineHeight='1.8em' fontFamily="'Comfortaa',cursive" alignItems='center' ><GiTrophyCup />&nbsp;Course advance reactjs - Platzi</Text>
    <Text lineHeight='1.8em' fontFamily="'Comfortaa',cursive" alignItems='center' ><GiTrophyCup />&nbsp;Course of graphql - Platzi</Text>
    <Text lineHeight='1.8em' fontFamily="'Comfortaa',cursive" alignItems='center' ><GiTrophyCup />&nbsp;Course passportjs - Platzi</Text>
  </Layout>
)


export default Awards
