import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

function HireMe() {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflew-hidden">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <CircularText text="Hire Me" className={"fill-dark animate-spin-slow"}/>
        <Link href="mailto:levmisiliuk@gmail.com" target={"_blank"} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center bg-dark text-light justify-center shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark transition duration-500">
          Hire me
        </Link>
      </div>
    </div>
  )
}

export default HireMe