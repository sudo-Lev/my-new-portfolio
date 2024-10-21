import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({ name, x, y, color }) => {

  const bgColorClass = {
    "yellow-500": "bg-yellow-500",
    "blue-500": "bg-blue-500",
    "blue-800": "bg-blue-800",
    "red-500": "bg-red-500",
    "green-700": "bg-green-700",
    "green-500": "bg-green-500",
    "purple-500": "bg-purple-500",
    "orange-500": "bg-orange-500",
  }[color];

  return (
    <motion.div
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      whileHover={{ scale: 1.08 }}
      viewport={{once: true}}
      className={`flex items-center justify-center rounded-full font-semibold text-light py-3 px-6 shadow-dark cursor-pointer absolute ${bgColorClass}`}
    >
      {name}
    </motion.div>
  )
}



function Skills() {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div whileHover={{ scale: 1.08 }} className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark  cursor-pointer">
          Web
        </motion.div>

        <Skill name="HTML" x="0vw" y="-10vw" color="purple-500" />

        <Skill name="CSS" x="-10vw" y="-8vw" color="purple-500" />
        <Skill name="LESS/SCSS" x="10vw" y="-8vw" color="purple-500" />
        <Skill name="Tailwind" x="0vw" y="-15vw" color="purple-500" />

        <Skill name="Vue2/3" x="-13vw" y="0vw" color="green-700" />
        <Skill name="Vuex/Pinia" x="-22vw" y="0vw" color="green-700" />
        <Skill name="Nuxt.js" x="-12vw" y="5vw" color="green-700" />

        <Skill name="React" x="13vw" y="0vw" color="blue-500" />
        <Skill name="Redux" x="22vw" y="0vw" color="blue-500" />
        <Skill name="Next.js" x="12vw" y="5vw" color="blue-500" />

        <Skill name="Node.js" x="0vw" y="15vw" color="red-500" />
        <Skill name="Express.js" x="0vw" y="10vw" color="red-500" />

        <Skill name="PHP/Laravel" x="0vw" y="20vw" color="red-500" />

        <Skill name="MongoDB" x="-10vw" y="15vw" color="orange-500" />
        <Skill name="My SQL" x="10vw" y="15vw" color="orange-500" />
      </div>
    </>
  )
}

export default Skills