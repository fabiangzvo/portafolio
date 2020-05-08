import styled from "styled-components"
import { flexbox, layout, color, typography, border, position, space } from "styled-system";
import { Link as Anchor } from "gatsby"
import { motion } from "framer-motion"
import { Grid } from '@material-ui/core'

export const Layout = styled(Grid)`
  display:flex;
  ${flexbox}
  ${layout}
  ${color}
  ${border}
  ${space}
`
export const H1 = styled(motion.h1)`
${color}
  ${typography}
  ${flexbox}
  ${space}
`
export const H2 = styled(motion.h2)`
${color}
  ${typography}
  ${flexbox}
  ${space}
`
export const H3 = styled(motion.h3)`
  ${color}
  ${typography}
  ${flexbox}
  ${space}
`

export const ExperienceCard = styled.div`
  width:100%;
  padding-bottom:1em;
  width: 97%;
  border-bottom: 1px solid gray
`

export const Name = styled(motion.div)`
  ${color}
  font-family:  'Comfortaa', cursive;
  font-size:1.5rem;
  font-weight:unset;
  opacity:0;
  display:flex;
  justify-content: center;
`
export const Code = styled.label`
  ${color}
  ${typography}
  font-family: ${props => props.family || "'Fira Code', monospace"};
  line-height:1.5em;
  font-size:auto;
  visibility:${props => props.hide || 'visible'};
  height:${({ height }) => height ? height : 'auto'};
`
export const Text = styled.div`
  display:flex;
  ${flexbox}
  ${color}
  ${typography}
  ${space}
  opacity:${props => props.opacity || '1'};
`

export const Link = styled(Anchor)`
  ${typography}
  ${position}
`

export const Console = styled(motion.div)`
  max-width: 70vw;
  width:70vw;
  height:41vh;
  background: rgb(0,0,0);
  padding: .5rem 0em 0em .7rem;
  overflow:auto;
`