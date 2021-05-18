import React, { useState } from 'react'
import { useLocation } from "@reach/router";
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

import { NavBarContainer, StyledDrawer, Container } from "./styles"
import Menu from "./components/Menu";
import constants from "./constants/NavBar";

const NavBar = ({ smallScreen }) => {
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(false)

  const handleClick = () => setVisible(!visible)

  if (pathname === '/') return null

  if (smallScreen) return (
    <Container>
      <GiHamburgerMenu onClick={handleClick} />
      <StyledDrawer open={visible} onClose={handleClick} {...constants.DRAWER_PROPS}>
        <div className='icon'>
          <GrClose onClick={handleClick} />
        </div>
        <Menu handleClick={handleClick} smallScreen={smallScreen} />
      </StyledDrawer>
    </Container>
  )

  return (
    <NavBarContainer className='navbar'>
      <Menu />
    </NavBarContainer>
  )
}

export default NavBar
