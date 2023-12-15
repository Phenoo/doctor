import React from 'react'

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Button } from '../ui/button'
import Sidebar from './sidebar'
import {VscMenu} from "react-icons/vsc"

const  Mobile = () => {
  return (
    <div className='md:hidden' >
         <Sheet>
      <SheetTrigger asChild>
        <Button >
            <VscMenu className='w-6 h-6' />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <Sidebar />
      </SheetContent>
    </Sheet>
    </div>
  )
}

export default  Mobile