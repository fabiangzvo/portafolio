import React, { useRef, useEffect } from 'react'
import animation from "../../HOC/Animation";
import { Console, Code, Layout } from "../../styles/components"
import { Container } from "./Slogan.style";

const Slogan = ({ reference }) => {



  return (
    <Container height='41vh' hide='visible' ref={div => { reference(div) }}>The best things are written in the web.</Container>
  )
}

export default animation(Slogan)
