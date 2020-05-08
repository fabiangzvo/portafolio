import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  html{
    height:100vh !important;
    width:100vw !important;
  }
  body{
    margin:0;
  }

  svg{
    color:#62b6cb;
    :hover{
      color:#bee9e8;
      cursor: pointer;
    }
  }
  /* width */
.bash::-webkit-scrollbar {
  width: 5px;
  height:5px;
}

/* Track */
.bash::-webkit-scrollbar-track {
  background: rgba(0,0,0,1.7);;
}

.icon{
  margin-right:1em;
}
 
/* Handle */
.bash::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
.bash::-webkit-scrollbar-thumb:hover {
  background: #555; 
}

.visible{
  display:block;
  color:red;
  transition: display 3s ease-in-out;
}

.unvisible{
  display:none;
  transition: all 3s linear;
}

.slogan{
  opacity:none;
}
.melo{
  position:relative;
  overflow:hidden;
}
.star {
  background: #bee9e8;
  border-radius: 100%;
  position: absolute;
}

.particle{
  position:absolute;
  width:20px;
  height:20px;
  background-color:transparent;
  border:2px solid #fff;
  border-radius:2px;
  box-shadow:0 0 5px rgba(0,0,0,.3),
             0 0 10px rgba(0,0,0,.3),
             0 0 20px rgba(0,0,0,.3);
}

.background{


background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='640' height='640' viewBox='0 0 800 800'%3E%3Cg fill='%23457b9d'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E"),
linear-gradient(19deg, #0d45a6 0%, #0c213f 75%);
}

.mselo{
  background-color: #1b0b33;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='50' height='25' viewBox='0 0 50 25'%3E%3Cdefs%3E%3Crect stroke='%231b0b33' stroke-width='0.1' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='2' height='2' patternUnits='userSpaceOnUse'%3E%3Cg stroke='%231b0b33' stroke-width='0.1'%3E%3Crect fill='%23201037' width='1' height='1'/%3E%3Crect fill='%231b0b33' width='1' height='1' x='1' y='1'/%3E%3Crect fill='%2324153b' width='1' height='1' y='1'/%3E%3Crect fill='%23291a3f' width='1' height='1' x='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='b' width='5' height='11' patternUnits='userSpaceOnUse'%3E%3Cg fill='%232d1f43'%3E%3Cuse xlink:href='%23s' x='2' y='0'/%3E%3Cuse xlink:href='%23s' x='4' y='1'/%3E%3Cuse xlink:href='%23s' x='1' y='2'/%3E%3Cuse xlink:href='%23s' x='2' y='4'/%3E%3Cuse xlink:href='%23s' x='4' y='6'/%3E%3Cuse xlink:href='%23s' x='0' y='8'/%3E%3Cuse xlink:href='%23s' x='3' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='7' height='7' patternUnits='userSpaceOnUse'%3E%3Cg fill='%23322347'%3E%3Cuse xlink:href='%23s' x='1' y='1'/%3E%3Cuse xlink:href='%23s' x='3' y='4'/%3E%3Cuse xlink:href='%23s' x='5' y='6'/%3E%3Cuse xlink:href='%23s' x='0' y='3'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='11' height='5' patternUnits='userSpaceOnUse'%3E%3Cg fill='%231b0b33'%3E%3Cuse xlink:href='%23s' x='1' y='1'/%3E%3Cuse xlink:href='%23s' x='6' y='3'/%3E%3Cuse xlink:href='%23s' x='8' y='2'/%3E%3Cuse xlink:href='%23s' x='3' y='0'/%3E%3Cuse xlink:href='%23s' x='0' y='3'/%3E%3C/g%3E%3Cg fill='%2336284b'%3E%3Cuse xlink:href='%23s' x='8' y='3'/%3E%3Cuse xlink:href='%23s' x='4' y='2'/%3E%3Cuse xlink:href='%23s' x='5' y='4'/%3E%3Cuse xlink:href='%23s' x='10' y='0'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='23' patternUnits='userSpaceOnUse'%3E%3Cg fill='%23203455'%3E%3Cuse xlink:href='%23s' x='2' y='5'/%3E%3Cuse xlink:href='%23s' x='23' y='13'/%3E%3Cuse xlink:href='%23s' x='4' y='18'/%3E%3Cuse xlink:href='%23s' x='35' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='61' height='31' patternUnits='userSpaceOnUse'%3E%3Cg fill='%23203455'%3E%3Cuse xlink:href='%23s' x='16' y='0'/%3E%3Cuse xlink:href='%23s' x='13' y='22'/%3E%3Cuse xlink:href='%23s' x='44' y='15'/%3E%3Cuse xlink:href='%23s' x='12' y='11'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='50' height='25'/%3E%3Crect fill='url(%23b)' width='50' height='25'/%3E%3Crect fill='url(%23c)' width='50' height='25'/%3E%3Crect fill='url(%23d)' width='50' height='25'/%3E%3Crect fill='url(%23e)' width='50' height='25'/%3E%3Crect fill='url(%23f)' width='50' height='25'/%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
}

.jum{
  color:white!important;
}

`
