'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const items = [
    ['Home', '/'],
    ['About','/#about'],
    ['Case Studies','/#case-studies'],
    ['Projects','/#projects'],
    ['Product Thinking','/#product-thinking'],
    ['Skills','/#skills'],
    ['Contact','/#contact']
  ]
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-white/6">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-heading text-xl font-semibold">Aryan Soni</Link>
        <div className="hidden md:flex items-center gap-6">
          {items.map(([label,href])=> (
            <Link key={label} href={href as string} className="text-sm hover:text-electric transition">{label}</Link>
          ))}
          <div className="flex items-center gap-2">
            <a href="/resume.pdf" className="px-3 py-1 border rounded-md text-sm bg-electric/10 border-electric hover:bg-electric/20 transition">Resume</a>
            <ThemeToggle />
          </div>
        </div>
        <button className="md:hidden p-2" onClick={()=>setOpen(!open)} aria-label="menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-background/90 border-t border-white/6">
          <div className="flex flex-col p-4 gap-3">
            {items.map(([label,href])=> (
              <Link key={label} href={href as string} onClick={()=>setOpen(false)} className="py-2">{label}</Link>
            ))}
            <a href="/resume.pdf" className="py-2">Download Resume</a>
          </div>
        </div>
      )}
    </header>
  )
}
