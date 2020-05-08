import styled from "styled-components"
import { flexbox, layout, border, color } from "styled-system";
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Drawer } from "@material-ui/core";

export const Nav = styled.div`
  display:flex;
  ${flexbox}
  ${color}
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 17rem;
  height: 100vh;
`

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
export const Menu = styled.ul`
  display:flex;
  ${flexbox}
  ${layout}
  list-style:none;
`

export const StyledDrawer = styled(Drawer)`
.drawer-custom-class{
  width: 100%;
}

.icon {
  display: flex;
  justify-content:flex-end;
  margin-top:1rem;
}

ul{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding:0;
}

li {
  text-align: center;
}
`

export const Container = styled.div`
  position: absolute;

  svg {
     font-size:1.5rem;
  }
`