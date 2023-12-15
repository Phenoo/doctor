import { ChevronRight } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

import { IoCheckmark } from "react-icons/io5";
import { BiX } from "react-icons/bi";


export function Appointlist() {
  const data = [
    {
      name: "Olivia Martin",
      time: "Female, 23, 12 April 09:45",
      confirm: true
    },
    {
      name: "Isabella Nguye",
      time: "Female, 23, 12 April 10:45",
      confirm: false
    },
    {
      name: "William Kim",
      time: "Male, 23, 12 April 09:45",
      confirm: true
    },
    {
      name: "Sofia Davis",
      time: "Male, 23, 12 April 09:45",
      confirm: false
    }
  ]
  return (
    <Card className="col-span-3nj border-none">
    <CardHeader className='flex items-center justify-between flex-row '>
      <CardTitle>Appointment List</CardTitle>
      <div>
        <Button variant={"link"} className='text-sky-500'>
          See All <ChevronRight size={14} />
        </Button>
      </div>
    </CardHeader>
    <CardContent>
    <div className="space-y-6">
      {
        data.map((item, i) => (
          <div className="flex items-center gap-4 " key={i}>
            <Avatar className="h-9 w-9">
              <AvatarImage src="/avatars/01.png" alt="Avatar" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
           <div className='w-full flex md:flex-row flex-col space-y-2 justify-between'>
            <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">{item.name}</p>
                <p className="text-sm text-muted-foreground">
                  {item.time}
                </p>
              </div>
              <div className=" font-medium">
                {item.confirm ? 
                  <Button className='w-full md:w-fit bg-purple-100 text-purple-900 hover:bg-inherit hover:text-inherit'>
                    confirmed
                  </Button>
                  :
                  <Button className='w-full md:w-fit bg-red-100 text-red-600  hover:bg-inherit hover:text-inherit'>
                    cancelled
                  </Button>
                }
              </div>
           </div>
          </div>
        ))
      }
          <div className="flex  ">
            <Avatar className="h-9 w-9">
              <AvatarImage src="/avatars/01.png" alt="Avatar" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div className='w-full flex md:flex-row flex-col space-y-2 justify-between'>
              <div className="ml-6 md:ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">Jackson Lee</p>
                <p className="text-sm text-muted-foreground">
                Female, 23, 12 April 10:45
                </p>
              </div>
              <div className="md:ml-auto flex space-x-2 font-medium">
                  <Button size={"icon"} className='bg-primary/20 text-primary hover:bg-inherit hover:text-inherit'>
                    <IoCheckmark size={16} />
                  </Button>
                  
                  <Button size={"icon"} className='bg-red-100 text-red-600  hover:bg-inherit hover:text-inherit'>
                    <BiX  size={16}/>
                  </Button>
                
              </div>
            </div>
          </div>
    </div>
        </CardContent>
  </Card>

  )
}

