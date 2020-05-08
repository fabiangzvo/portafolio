import React from 'react'
import { H3, Text, ExperienceCard, Layout } from "../../styles/components"
import { MdWork, MdAccessTime } from "react-icons/md"
import { Icon } from "../index";

const WorkCard = ({ job, employer, time, icons = [] }) => {

  return (
    <ExperienceCard>
      <div>
        <H3 mb='.2em' fontFamily="'Comfortaa',cursive" fontSize='calc(0.7em + 1vw)' fontWeight='bold'>{job}</H3>
        <Layout >
          <Text mr='1em' alignContent='center' fontWeight='unset' fontFamily="'Comfortaa',cursive" fontSize='calc(0.2em + 1vw)'  >
            <MdWork />&nbsp;{employer}.
          </Text>
          <Text alignContent='center' fontWeight='unset' fontFamily="'Comfortaa',cursive" fontSize='calc(0.2em + 1vw)' >
            <MdAccessTime />&nbsp; {time}.
          </Text>
        </Layout>
      </div>
      <Layout marginTop='1em'>
        {
          icons.map(iconName => {
            return <Icon className='icon' key={iconName} name={iconName} size='calc(1em + 1vw)' />
          })
        }
      </Layout>
    </ExperienceCard>
  )
}

export default WorkCard
