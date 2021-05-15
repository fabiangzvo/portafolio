import React from 'react'
import { H1, Text } from "../styles/components"
import { GiBrain } from "react-icons/gi";
import { Icon } from "../components/index";
import Layout from "../components/Layout/index";

const Skills = ({ transitionStatus }) => {
  const languajes = ['javascript', 'elixir', 'python', 'php', 'html', 'css']
  const tools = ['node', 'react', 'django', 'phoenix', 'wordpress', 'sass', 'linux']
  const databases = ['mysql', 'postgres', 'mongo']

  return (
    <Layout className={transitionStatus} height='100vh' bg='#0e0f14' color='white.0' flexDirection='column' alignItems='flex-start' justifyContent='center' >
      <H1 mb='.5em' initial={{ y: 32 * 1.2 }}
        animate={{ y: 0 }}
        transition={{
          ease: "easeOut",
          duration: 0.4,
        }}
        fontINTERESTSt='bold' fontFamily="'Comfortaa',cursive">
        SKILLS&nbsp;<GiBrain /></H1>

      <Text fontFamily="'Comfortaa',cursive" mb='1.5em' >Programming languages</Text>
      <div>
        {
          languajes.map(languaje => <Icon name={languaje} className='icon' size='2em' />)
        }
      </div>
      <Text fontFamily="'Comfortaa',cursive" mb='1.5em' >Tools</Text>
      <div>
        {
          tools.map(languaje => <Icon name={languaje} className='icon' size='2em' />)
        }
      </div>
      <Text fontFamily="'Comfortaa',cursive" mb='1.5em' >Databases</Text>
      <div>
        {
          databases.map(languaje => <Icon name={languaje} className='icon' size='2em' />)
        }
      </div>
      <div>
        <Text fontFamily="'Comfortaa',cursive" mb='1em' >Responsive Design</Text>
        <Text fontFamily="'Comfortaa',cursive" mb='1em' >Testing</Text>
        <Text fontFamily="'Comfortaa',cursive" mb='1em' >Best practices</Text>
      </div>
    </Layout>
  )
}

export default Skills
