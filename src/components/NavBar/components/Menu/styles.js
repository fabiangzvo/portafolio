import styled from "styled-components"
import { layout, border } from "styled-system";
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const Link = styled(AniLink)`
  ${layout}
  ${border}
  display: inline-block;
  text-decoration:none;
  color:#62b6cb;
  font-weight:bold;
  font-family:'Roboto Condensed', sans-serif;
  font-size:1.2em;
  line-height:2.5em;
  :hover{
    color:#bee9e8;
  }
`
export const ImageLink = styled(AniLink)`
  display: flex;
  text-decoration:none;
  width:${({ smallScreen }) => smallScreen ? '100%' : '11rem'};;
  color:${({ theme }) => theme.icons};
  font-weight:bold;
  font-family:'Roboto Condensed', sans-serif;
  font-size:1.2em;
  line-height:2.5em;
  justify-content:center;
  
  &:hover{
    color:#bee9e8;
  }
`

export const NavList = styled.nav`
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  height:${({ smallScreen }) => smallScreen ? '100%' : '30vh'};
  list-style:none;
  margin: 1rem 0;
`

export const SocialNewtworksContainer = styled.ul`
  width:100%;
  display:flex;
  justify-content:space-evenly;
  list-style:none;
  padding:0;
`

export const ImageContainer = styled.div`
  
`