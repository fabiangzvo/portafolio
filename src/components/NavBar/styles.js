import styled from "styled-components"
import { Drawer } from "@material-ui/core";

export const NavBarContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 17rem;
  height: 100vh;
  background-color:${({ theme }) => theme.home};
`
export const StyledDrawer = styled(Drawer)`
.drawer-custom-class{
  background-color:${({ theme }) => theme.home};
  width: 100%;
}

.icon {
  display: flex;
  justify-content:flex-end;
  margin-top:1rem;
}

.icon path {
  stroke:${({ theme }) => theme.icons};
}

li {
  text-align: center;
}
`

export const Container = styled.div`
  position: absolute;
  top:0;
  margin: 0.5rem;

  svg {
     font-size:1.5rem;
  }
`