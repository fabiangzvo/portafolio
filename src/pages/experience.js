import React from 'react'
import { H1 } from "../styles/components"
import { FaBusinessTime } from "react-icons/fa"
import { ListOfWorks } from "../components/index";
import Layout from "../components/Layout/index";

const Experience = ({ transitionStatus }) => {
  const jobs = [{ job: 'junior web developer', employer: 'sw consulting', time: '6 months', icons: ['wordpress', 'jquery', 'html', 'css'] },
  { job: 'Professional technical practice in software development', employer: 'swat-it', time: '4 months', icons: ['wordpress', 'typerocket', 'jquery', 'html', 'css'] }]
  return (
    <Layout className={transitionStatus}>
      <H1 margin={0} initial={{ y: 32 * 1.2 }}
        animate={{ y: 0 }}
        transition={{
          ease: "easeOut",
          duration: 0.4,
        }}
        fontWeight='bold' fontFamily="'Comfortaa',cursive">
        EXPERIENCE&nbsp; <FaBusinessTime /></H1>
      <ListOfWorks jobs={jobs} />
    </Layout >
  )
}

export default Experience
