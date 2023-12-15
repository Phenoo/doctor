import React from 'react'
import { PiStethoscope } from "react-icons/pi";

const Logo = () => {
  return (
    <div className="relative z-20 flex gap-1 items-center text-lg font-medium text-foreground">
    <PiStethoscope className="w-6 h-6" />
       DocTalk
    </div>  )
}

export default Logo