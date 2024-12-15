"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { MenuIcon, XIcon } from 'lucide-react'
import { NavigationMenuDemo } from './navtest'
import Image from 'next/image'

const navItems = [
  { name: 'Sobre', href: '#about' },
  { name: 'Eventos', href: '#events' },
  { name: 'Patrocinadores', href: '#sponsors' },
  { name: 'Contato', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-black py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between  max-md:justify-between items-center"
          style={{marginTop: "-20px"}}
         >
          <Link href="/" className="text-white text-2xl font-bold">
            {/* Norte<span className="text-yellow-400">JS</span> */}
          <Image
          src="/logo.svg"
          width={80}
          // className='w-10'
          height={25}
          alt='Logo nortejs'
          />
          </Link>
          <div className="hidden md:block mr-36">
            <NavigationMenuDemo />
          </div>
          <div className="md:hidden mt-2">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black  border-b border-slate-800/15"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-2 px-4 text-slate-300 hover:text-slate-50 hover:bg-gradient-to-r hover:from-slate-800/15 to-slate-50"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  )
}

