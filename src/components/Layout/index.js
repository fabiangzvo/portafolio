import React from 'react'
import { Grid, Container } from "./styles"
import { useLocation } from "@reach/router";
import useMediaQuery from '@material-ui/core/useMediaQuery';

import NavBar from "../NavBar/index";

const Layout = props => {
  const { children, container, ...restProps } = props

  const { pathname } = useLocation()
  const smallScreen = useMediaQuery('(max-width:768px)')
  const visible = pathname !== '/'
  const page = pathname.replace('/', '')

  const formatChildren = () => {
    if (pathname === '/') return children

    return (
      < Container visible={(visible && !smallScreen)}>
        {children}
      </Container >
    )
  }

  return (
    <Grid container={container} page={page} {...restProps}>
      {visible && <NavBar smallScreen={smallScreen} />}
      {formatChildren()}
    </Grid>
  )
}

Layout.defaultProps = {
  container: false
}

export default Layout