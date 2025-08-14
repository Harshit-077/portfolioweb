import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar bg-neutral-content">
      <div className="navbar-start">
        <span className="text-blue-900/70 text-2xl">Harshit&nbsp;</span>
        <span className="text-cream text-2xl">Sharma</span>
      </div>
      <div className="navbar-center">
        <Link href="/" className="btn btn-ghost">Home</Link>
        <Link href="/projects" className="btn btn-ghost">Projects</Link>
      </div>

      <div className="navbar-end">
        <button className="btn btn-outline btn-primary hover:text-white"><Link href='https://www.linkedin.com/in/harshitsharma77' target="_blank">Hire Me</Link></button>
      </div>
    </nav>
  )
}

export default Navbar