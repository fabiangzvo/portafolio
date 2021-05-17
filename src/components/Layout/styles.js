import styled from "styled-components"

import { alignItems, justifyContent } from "./constants";

const getFlexProperties = (page = 'home', justify = false) => justify ? justifyContent[page] : alignItems[page]

export const Grid = styled.div`
  width: 100vw;
  height: 100vh;
  display:flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content:${({ page }) => getFlexProperties(page, true)};
  align-items:${({ page }) => getFlexProperties(page)};
  background-color:${({ theme, page }) => theme[page]};
`

export const Container = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  height:100vh;
  padding-left:1em;
  margin-left:${({ visible }) => visible ? '17em' : '0'}
`