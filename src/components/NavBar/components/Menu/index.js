import React from 'react'

import { Image } from "../../../index"
import { Link, ImageLink, SocialNewtworksContainer, NavList, ImageContainer } from "./styles";
import constants from "./constants/Menu";

const Menu = ({ handleClick, smallScreen }) => {
  const redirect = (url) => window.open(url, '__blank')

  const getMenuList = () => constants.routes.map(
    (route, index) => <li key={index}><Link fade duration={.7} top="entry" direction="rigth" to={route.path} onClick={handleClick}>{route.label}</Link></li>
  )

  const getSocialNetworks = () => constants.socialNetworks.map(
    ({ Icon, url }, index) => <Icon key={index} size='2em' onClick={() => redirect(url)} />
  )

  const getImage = () =>
    smallScreen ?
      <ImageContainer><Image /></ImageContainer> :
      <Image />

  return (
    <>
      <ImageLink smallScreen={smallScreen} swipe duration={1} top="entry" direction="up" to='/'>
        {getImage()}
      </ImageLink>
      <NavList smallScreen={smallScreen}>
        {getMenuList()}
      </NavList>
      <SocialNewtworksContainer>
        {getSocialNetworks()}
      </SocialNewtworksContainer>
    </>
  )
}

Menu.defaultProps = {
  handleClick: () => { },
  smallScreen: false
}

export default Menu
