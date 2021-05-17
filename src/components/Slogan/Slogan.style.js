import styled from "styled-components";

export const Container = styled.label`
  font-family: 'Lobster', cursive;
  text-align: center;
  line-height:1.5em;
  font-size:auto;
  visibility:${props => props.hide || 'visible'};
  height:${({ height }) => height ? height : 'auto'};
  font-size: calc(2em + 1vw);
  color: ${({ theme }) => {

    return theme.yellow
  }}
  `
