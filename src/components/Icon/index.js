import React from 'react'

const Icon = ({ name = '', size = '1em', className }) => {

  const getIcon = (icon) => {
    switch (icon) {
      case 'wordpress':
        const { FaWordpress } = require('react-icons/fa')
        return <FaWordpress className={className} title={name} size={size} />
      case 'react':
        const { FaReact } = require('react-icons/fa')
        return <FaReact className={className} title={name} size={size} />
      case 'css':
        const { FaCss3Alt } = require('react-icons/fa')
        return <FaCss3Alt className={className} title={name} size={size} />
      case 'html':
        const { FaHtml5 } = require('react-icons/fa')
        return <FaHtml5 className={className} title={name} size={size} />
      case 'sass':
        const { FaSass } = require('react-icons/fa')
        return <FaSass className={className} title={name} size={size} />
      case 'jquery':
        const { DiJqueryLogo } = require('react-icons/di')
        return <DiJqueryLogo className={className} title={name} size={size} />
      case 'javascript':
        const { DiJavascript1 } = require('react-icons/di')
        return <DiJavascript1 className={className} title={name} size={size} />
      case 'typerocket':
        const { IoIosRocket } = require('react-icons/io')
        return <IoIosRocket className={className} title={name} size={size} />
      case 'python':
        const { FaPython } = require('react-icons/fa')
        return <FaPython className={className} title={name} size={size} />
      case 'elixir':
        const { GiWaterDrop } = require('react-icons/gi')
        return <GiWaterDrop className={className} title={name} size={size} />
      case 'php':
        const { DiPhp } = require('react-icons/di')
        return <DiPhp className={className} title={name} size={size} />
      case 'node':
        const { FaNodeJs } = require('react-icons/fa')
        return <FaNodeJs className={className} title={name} size={size} />
      case 'phoenix':
        const { FaPhoenixFramework } = require('react-icons/fa')
        return <FaPhoenixFramework className={className} title={name} size={size} />
      case 'django':
        const { DiDjango } = require('react-icons/di')
        return <DiDjango className={className} title={name} size={size} />
      case 'postgres':
        const { DiPostgresql } = require('react-icons/di')
        return <DiPostgresql className={className} title={name} size={size} />
      case 'mysql':
        const { DiMysql } = require('react-icons/di')
        return <DiMysql className={className} title={name} size={size} />
      case 'mongo':
        const { DiMongodb } = require('react-icons/di')
        return <DiMongodb className={className} title={name} size={size} />
      case 'linux':
        const { FaLinux } = require('react-icons/fa')
        return <FaLinux className={className} title={name} size={size} />
      case 'ml':
        const { FaRobot } = require('react-icons/fa')
        return <FaRobot className={className} title='machine learning' size={size} />
      default:
        return ''
    }
  }

  return getIcon(name)
}

export default Icon
