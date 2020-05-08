import React, { useState } from 'react'
import { graphql, useStaticQuery } from "gatsby"
import { useLocation } from "@reach/router";
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

import { Nav, Link, Menu, StyledDrawer,Container } from "./style"
import { Image } from "../index"
import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import * as constants from "./constants/NavBar";

const NavBar = (props) => {
  const { smallScreen } = props
  const { pathname } = useLocation()

  const [visible, setVisible] = useState(false)

  const redirect = (url) => window.open(url, '__blank')
  
  if (pathname === '/') return null

  return smallScreen ? <Container><GiHamburgerMenu onClick={() => setVisible(!visible)} />
    <StyledDrawer classes={{ paper: 'drawer-custom-class' }} anchor='left' elevation={32} open={visible} onClose={() => setVisible(!visible)}>
      <div className='icon'><GrClose onClick={() => setVisible(!visible)} /></div>
      <Menu flexDirection='column' justifyContent='space-around' height='30vh'>
        {
          constants.routes.map((route, index) => <li><Link fade duration={.7} top="entry" direction="rigth" key={index} to={route.path} onClick={(e) => console.log(e)}>{route.label}</Link></li>)
        }
      </Menu>

    </StyledDrawer>
  </Container> : (
      <Nav bg='blue.0' className='navbar' flexDirection='column' justifyContent='space-around' alignItems='center'>
        <Link width='11rem' swipe duration={1} top="entry" direction="up" to='/'>
          <Image />
        </Link>
        <Menu flexDirection='column' justifyContent='space-around' height='30vh'>
          {
            constants.routes.map((route, index) => <Link fade duration={.7} top="entry" direction="rigth" key={index} to={route.path} onClick={(e) => console.log(e)}>{route.label}</Link>)
          }
        </Menu>
        <Menu width='100%' justifyContent='space-evenly'>
          <AiFillTwitterCircle size='2em' onClick={() => redirect('https://twitter.com/fabiangzvo')} />
          <AiFillGithub size='2em' onClick={() => redirect('https://github.com/fabiangzvo/')} />
          <AiFillLinkedin size='2em' onClick={() => redirect('https://www.linkedin.com/in/fabian-guzman-190618141/')} />
        </Menu>
      </Nav>
    )
}

export default NavBar
