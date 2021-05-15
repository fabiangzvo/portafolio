import styled from "styled-components"
import { motion } from "framer-motion"
import { Grid } from '@material-ui/core'

export const Template = styled(Grid)`
  display:flex;
`
export const H1 = styled(motion.h1)`
  font-weight: bold;
  margin: 0;

  & > span {
    cursor: default;
  }
`

export const LocationText = styled.article`
  margin-right:1.5em;
  font-weight:unset; 
`

export const AgeText = styled.article`
  font-weight:unset; 
`

export const ResumeText = styled.article`
width:90%;
flex-wrap:wrap;
align-items:center;
font-weight:0; 
font-family:Sans serif;
font-size:calc(0.5em + 1vw); 
`