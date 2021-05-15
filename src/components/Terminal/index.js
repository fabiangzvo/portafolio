import React, { useEffect, useState } from 'react'

import { typingEffect } from "../../utils/index"
import { useNearScreen } from "../../hooks/useNearScreen"
import { Console, Code, Layout } from "../../styles/components"
import Options from "./Options";
import Slogan from "../Slogan/index";
import { Power4 } from "gsap";

import { motion, AnimatePresence } from "framer-motion"

const Terminal = ({ reference, umount, transitionStatus, entry, exit }) => {
  let variable = false
  const [show, ref] = useNearScreen()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const texts = ['const &nbsp;', 'response &nbsp;', '= &nbsp;', 'await &nbsp;', 'fetch', '(',
      '"https://fabiangzvo.dev/logo"', ')', 'const &nbsp;', 'data &nbsp;', '= &nbsp;', 'await &nbsp;',
      'res.', 'json', '()', 'console.', 'log', '(&nbsp;', 'response.', 'logo&nbsp;', ')']

    const me = async () => {
      if (show) {
        const res = await typingEffect('.typing-effect', texts)
        setVisible(res)
      }
    }

    me()
  }, [show])

  visible && (() => {
    document.getElementsByClassName('bash')[0].style.visibility = 'hidden'
    document.getElementsByClassName('terminal')[0].style.display = 'none'
    document.getElementsByClassName('bash')[0].style.height = '30px'
    variable = true
  })()
  //ref={(div) => { reference(div) }} {transitionStatus, 
  return (
    <AnimatePresence>
      <Console key={1} exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ ease: "easeIn", duration: 3 }} className="bash" >
        <Layout ref={ref} width='100%' height='9%' alignItems='center' paddinLeft='1em'><Options /></Layout>
        <motion.div />
        <div className='vscode'>
          <Code fontSize='calc(.5em + 1vw)' className='typing-effect' color='purple.1' />
          <Code fontSize='calc(.5em + 1vw)' className='typing-effect' color='blue.1' />
          <Code fontSize='calc(.5em + 1vw)' className='typing-effect' color='blue.1' />
          <Code fontSize='calc(.5em + 1vw)' className='typing-effect' color='red.2' />
          <Code fontSize='calc(.5em + 1vw)' className='typing-effect' color='purple.1' />
          <Code fontSize='calc(.5em + 1vw)' className='typing-effect' color='blue.1' />
          <Code fontSize='calc(.5em + 1vw)' className='typing-effect' color='yellow.0' />
          <Code fontSize='calc(.5em + 1vw)' className='typing-effect' color='blue.1' />
          <br /><br />
          <Code fontSize='calc(.5em + 1vw)' className='typing-effect' color='purple.1' />
          <Code fontSize='calc(.5em + 1vw)' className='typing-effect' color='blue.1' />
          <Code fontSize='calc(.5em + 1vw)' className='typing-effect' color='red.2' />
          <Code fontSize='calc(.5em + 1vw)' className='typing-effect' color='purple.1' />
          <Code fontSize='calc(.5em + 1vw)' className='typing-effect' color='blue.1' />
          <Code fontSize='calc(.5em + 1vw)' className='typing-effect' color='red.2' />
          <Code fontSize='calc(.5em + 1vw)' className='typing-effect' color='blue.1' />
          <br /><br />
          <Code fontSize='calc(.5em + 1vw)' className='typing-effect' color='blue.1' />
          <Code fontSize='calc(.5em + 1vw)' className='typing-effect' color='red.2' />
          <Code fontSize='calc(.5em + 1vw)' className='typing-effect' color='blue.1' />
          <Code fontSize='calc(.5em + 1vw)' className='typing-effect' color='blue.1' />
          <Code fontSize='calc(.5em + 1vw)' className='typing-effect' color='red.2' />
          <Code fontSize='calc(.5em + 1vw)' className='typing-effect' color='blue.1' />
          <br /><br />
        </div>
        <div className='terminal unvisible'>
          <Code fontSize='calc(.5em + 1vw)' color='yellow.0'>~&ensp;</Code>
          <Code fontSize='calc(.5em + 1vw)' color='blue.1'>Fabiangzvo&ensp;</Code>
          <Code fontSize='calc(.5em + 1vw)' className='terminal-effect' color='green.2' />
          <Code fontSize='calc(.5em + 1vw)' className='terminal-effect' color='green.2' /><br />
          <Code fontSize='calc(.5em + 1vw)' className='terminal-effect' color='green.2' />
        </div>
      </Console>
      {variable && visible && <Slogan key={2} duration={1} visibility='visible' delay={1} opacity={0} y={-600} animation={Power4.easeIn} />}
    </AnimatePresence>
  )
}

//export default animation(Terminal)
export default Terminal