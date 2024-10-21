"use client"

import React from 'react'
import { useScroll, motion } from 'framer-motion'
import { useRef } from 'react'
import LilIcon from './LilIcon'

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null)
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between">
      <LilIcon reference={ref} />
      <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration: 1, type: "spring"}}>
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;<a target="_blank" className="text-primary capitalize" href={companyLink}>@company</a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">
          {work}
        </p>
      </motion.div>
    </li>
  )
}

function Experience() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  })

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-[32px] w-full text-center">
        Experience
      </h2>
      <div className="w-[75%] mx-auto relative">
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <motion.div style={{scaleY: scrollYProgress}} ref={ref} className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top" />
          <Details
            position="Frontend Developer"
            company="Google"
            companyLink="https://google.com"
            time="2019 - 2021"
            address="Mountain View, CA"
            work="Designed user interfaces for Facebook's mobile app. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.   lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.
            Designed user interfaces for Facebook's mobile app. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.   lorem ipsum dolor sit amet. lorem ipsum dolor sit amet."
          />
          <Details
            position="UI/UX Designer"
            company="Facebook"
            companyLink="https://facebook.com"
            time="2017 - 2019"
            address="Menlo Park, CA"
            work="Designed user interfaces for Facebook's mobile app. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.   lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.
            Designed user interfaces for Facebook's mobile app. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.   lorem ipsum dolor sit amet. lorem ipsum dolor sit amet."
          />
          <Details
            position="Product Manager"
            company="Apple"
            companyLink="https://apple.com"
            time="2015 - 2017"
            address="Cupertino, CA"
            work="Designed user interfaces for Facebook's mobile app. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.   lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.
            Designed user interfaces for Facebook's mobile app. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.   lorem ipsum dolor sit amet. lorem ipsum dolor sit amet."
          />

        </ul>
      </div>
    </div>
  )
}

export default Experience