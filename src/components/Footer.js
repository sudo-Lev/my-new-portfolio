import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className="flex items-center">Build with <span className="text-red-600 text-2xl px-1">&#9825;</span> in Dnipro</div>
        <div>
          <Link href="/" className="mr-4">Say hello</Link>
        </div>
      </Layout>
    </footer>
  )
}

export default Footer