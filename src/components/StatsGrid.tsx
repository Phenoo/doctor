import { Banknote, Calendar, User, Video } from 'lucide-react'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { cn } from '@/lib/utils'

const StatsGrid = () => {
    const data = [
        {
            name: "appointments",
            number: "24.4k",
            icon: Calendar,
            backgorund: "bg-purple-500"
        },
        {
            name: "Total patients",
            number: "166.2k",
            icon: User,
            backgorund: "bg-pink-500"

        },
        {
            name: "Clinic consulttions",
            number: "54.4k",
            icon: Banknote,
            backgorund: "bg-yellow-500"
        },
        {
            name: "Video Consultations",
            number: "28.0k",
            icon: Video,
            backgorund: "bg-blue-500"
        },
    ]
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4  gap-4  my-4'>
        {
            data.map((item, i) => (
                <Card className={cn("border-none text-white", item.backgorund)} key={i}>
                    <CardHeader className="flex flex-row items-center gap-4 justify-between space-y-0 pb-2">
                        <CardTitle className="text-lg ms:text-xl font-medium capitalize">
                            {item.name}
                        </CardTitle>
                        <div className='bg-white/40 rounded-full p-2'>
                            <item.icon />
                        </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{item.number}</div>
                    <p className="text-xs">
                      +20.1% from last month
                    </p>
                  </CardContent>
                </Card>
                
            ) )
        }
    </div>
  )
}

export default StatsGrid