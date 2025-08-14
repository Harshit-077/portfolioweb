"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-neutral-content px-4 py-2 relative">
      <div className="flex justify-between items-center">
        <div className="text-2xl flex gap-1">
          <span className="text-blue-900/70">Harshit&nbsp;</span>
          <span className="text-cream">Sharma</span>
        </div>
        <div className={`flex-col md:flex md:flex-row md:items-center absolute md:static top-16 left-0 w-full md:w-auto bg-neutral-content md:bg-transparent p-4 md:p-0 z-50 ${menuOpen ? 'flex' : 'hidden'}`}>
          <Link href="/" className="btn btn-ghost w-full md:w-auto">Home</Link>
          <Link href="/projects" className="btn btn-ghost w-full md:w-auto">Projects</Link>
          <Link href="/experience" className="btn btn-ghost w-full md:w-auto">Experience</Link>
          <button className="btn btn-outline btn-primary hover:text-white mt-2 md:mt-0 md:ml-2 md:hidden">
            <Link href='https://www.linkedin.com/in/harshitsharma77' target="_blank">Hire Me</Link>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button className="btn btn-outline btn-primary hover:text-white hidden md:block">
            <Link href='https://www.linkedin.com/in/harshitsharma77' target="_blank">Hire Me</Link>
          </button>
          <button
            className="btn btn-circle swap swap-rotate md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className={`swap-off fill-current`} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
            <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
