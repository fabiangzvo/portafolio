import React from 'react'
import { Grid, Container } from "./style"
import { useLocation } from "@reach/router";
import useMediaQuery from '@material-ui/core/useMediaQuery';

import NavBar from "../NavBar/index";

const Layout = ({ children, width, justify, direction = 'row', height, align = 'center', margin, marginbottom, wrap = 'wrap', ...restProps }) => {
  const { pathname } = useLocation()
  const smallScreen = useMediaQuery('(max-width:768px)')
  const visible = pathname !== '/'
  
  return (
    <Grid direction={direction} width={width} justify={justify} height={height} align={align} margin={margin} marginbottom={marginbottom} wrap={wrap} {...restProps}>
      {visible && <NavBar smallScreen={smallScreen} />}
      <Container visible={(visible && !smallScreen)}>
        {children}
      </Container>
    </Grid>
  )
}


export default Layout