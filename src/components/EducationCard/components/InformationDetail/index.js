import React from 'react'
import { FaSchool } from 'react-icons/fa'
import { BiTime } from 'react-icons/bi'

import { Container } from "./style";

function InformationDetail(props) {
  const { entity, time } = props

  return (
    <Container>
      <FaSchool />&nbsp;{entity}&emsp;
      <BiTime />&nbsp;{time}
    </Container>
  )
}

InformationDetail.defaultProps = {
  entity: '',
  time: ''
}

export default InformationDetail
