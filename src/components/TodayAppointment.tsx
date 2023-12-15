import React from 'react'
import { ChevronRight } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

import { IoCheckmark } from "react-icons/io5";
import { BiX } from "react-icons/bi";

const TodayAppointment = () => {
    const data = [
        {
          name: "Olivia Martin",
          time: "Ongoing",
          situation: "Clinic consulting",
          confirm: true
        },
        {
          name: "Isabella Nguye",
          time: "10:45",
          situation: "Video consulting",
          confirm: false
        },
        {
          name: "William Kim",
          time: "09:45",
          situation: "Emergency",
          confirm: true
        },
        {
          name: "Sofia Davis",
          time: "09:45",
          confirm: false,
          situation: "Clinic consulting",
        }
      ]
      return (
        <Card className="col-span-3nj border-none ">
        <CardHeader className='flex items-center justify-between flex-row '>
          <CardTitle>Today Appointments</CardTitle>

        </CardHeader>
        <CardContent>
        <div className="space-y-6">
          {
            data.map((item, i) => (
              <div className="flex items-center " key={i}>
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/avatars/01.png" alt="Avatar" />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">{item.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.situation}
                  </p>
                </div>
                <div className="ml-auto font-medium">
                <p className="text-sm text-muted-foreground">
                    {item.time}
                  </p>
                </div>
              </div>
            ))
          }
             
        </div>
            </CardContent>
      </Card>
    
      )
    }

export default TodayAppointment