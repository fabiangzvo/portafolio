import styled from "styled-components"
import { flexbox, space, color, layout, border } from "styled-system";

export const Grid = styled.div`
  height:${props => props.height ? `${props.height}` : "auto"};
  min-height:${props => props.height ? `${props.height}` : "auto"};
  /*display: flex;
  flex-direction: ${props => props.direction} !important;
  align-items: ${props => props.align} !important;  width: ${props => props.width ? `${props.width}%` : "auto"} !important;
  justify-content: ${props => props.justify || "space-around"};
  flex-wrap: ${props => `${props.wrap}`} !important;
  margin-bottom:${props => props.marginbottom ? `${props.marginbottom}em` : 'auto'} !important;
  margin:${props => props.margin !== 'undefined' ? `${props.margin}em ${props.margin}em` : '0'} !important;*/
  color:white;
  ${flexbox}
  ${space}
  ${layout}
  ${color}
  ${border}
`

export const Container = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  height:100vh;
  padding-left:1em;
  margin-left:${({ visible }) => visible ? '17em' : '0'}
`