"use client"

import React from 'react'
import Logo from './Logo'
import { motion } from 'framer-motion'
import CustomLink from './CustomLink'
import { DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from './Icons'


function NavBar() {
	return (
		<header className="w-full px-32 py-8 font-medium flex items-center justify-between">
			<nav>
				<CustomLink href="/" title="Home" className="mr-4" />
				<CustomLink href="/about" title="About" className="mx-4" />
				<CustomLink href="/projects" title="Projects" className="mx-4" />
				<CustomLink href="/articles" title="Articles" className="ml-4" />
			</nav>
			<nav className="flex items-center gap-2 justify-center flex-wrap">
				<motion.a className="w-6 mr-3" href="https://twitter.com" target={"_blank"} whileHover={{y: -5}} whileTap={{scale:0.8}}>
					<TwitterIcon />
				</motion.a>
				<motion.a className="w-6 mx-3" href="https://github.com" target={"_blank"} whileHover={{y: -5}} whileTap={{scale:0.8}}>
					<GithubIcon />
				</motion.a>
				<motion.a className="w-6 mx-3" href="https://linkedin.com" target={"_blank"} whileHover={{y: -5}} whileTap={{scale:0.8}}>
					<LinkedInIcon />
				</motion.a>
				<motion.a className="w-6 mx-3" href="https://pinterest.com" target={"_blank"} whileHover={{y: -5}} whileTap={{scale:0.8}}>
					<PinterestIcon />
				</motion.a>
				<motion.a className="w-6 ml-3" href="https://dribble.com" target={"_blank"} whileHover={{y: -5}} whileTap={{scale:0.8}}>
					<DribbbleIcon />
				</motion.a>
			</nav>

			<div className="absolute left-[50%] top-2 translate-x-[-50%]">
				<Logo />
			</div>
		</header>
	)
}

export default NavBar