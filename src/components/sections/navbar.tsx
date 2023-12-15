import {  BellDot, Dot, Info } from 'lucide-react'
import React from 'react'
import { ModeToggle } from '../ui/darkmode'
import { CiBellOn } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className='flex items-center gap-2 sm:gap-4 bg-transparent '>
      <div className='cursor-pointer'>
        <Info  />
      </div>
      <div className='relative cursor-pointer'>
        <CiBellOn size={28} />
        <span className='absolute -top-6 left-0 text-red-600'><Dot className='w-12 h-12' /></span>
      </div>
      <ModeToggle />
    </div>
  )
}

export default Navbar