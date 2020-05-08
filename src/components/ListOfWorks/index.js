import React from 'react'

import WorkCard from "../workCard/index";
const ListOfWorks = ({ jobs = [] }) => {
  return (
    <>
      {
        jobs.map((job, index) => <WorkCard key={index} {...job} />)
      }
    </>
  )
}

export default ListOfWorks
