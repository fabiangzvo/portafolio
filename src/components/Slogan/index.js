import React from 'react'
import animation from "../../HOC/Animation";
import { Container } from "./Slogan.style";

const Slogan = ({ reference }) => {



  return (
    <Container height='41vh' hide='visible' ref={div => { reference(div) }}>The best things are written in the web.</Container>
  )
}

export default animation(Slogan)
