import React from 'react'

import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { User } from 'lucide-react'
import Piechartcomponent from './Piechart'
// import Piechartcomponent from './Piechart'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

function Year({field, defaultValue}: any) {
    const currentYear = new Date().getFullYear();
  
    const years = Array.from({ length: 80 }, (_, index) => currentYear - index);
  
    return (
                <Select>
                    <SelectTrigger className='w-28'>
                      <SelectValue placeholder="Select Year" />
                    </SelectTrigger>
                  <SelectContent  className="w-28">
                    {
                      years.map((item, i) => (
                      <SelectItem className="" key={i} value={`${item}`}>{item}</SelectItem>
                      ))
                    }
                  </SelectContent>
                </Select>
    )
  }

const PatientStatsCard = () => {
  return (
    <div className='p-1 bg-background rounded-xl'>
         <CardHeader className='flex items-center justify-between flex-row pb-2'>
      <CardTitle className='p-0'>Patients</CardTitle>
      <div>

      </div>
    </CardHeader>
        <CardContent className='p-0'>
            <div>

            <div>
            <Card className='border-none shadow-none'>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                <div className='flex gap-4 flex-row '>
                                    <div className='p-4 rounded-full bg-sky-100 text-sky-600'>
                                        <User />
                                    </div>
                                    <div>
                                        <div className="text-xl font-bold">24.4k</div>
                                        <p className='text-muted-foreground'>
                                            New Patients
                                        </p>
                                        </div>
                                </div>
                            </CardTitle>
                            <div className='flex items-center gap-1 text-primary'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="h-4 w-4 text-muted-foreground"
                                >
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                </svg>
                                <div>
                                    15%
                                </div>
                           </div>
                        </CardHeader>
                </Card>
                <Card className='border-none shadow-none'>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                <div className='flex gap-4 flex-row '>
                                    <div className='p-4 rounded-full bg-yellow-100 text-yellow-600'>
                                        <User />
                                    </div>
                                    <div>
                                        <div className="text-xl font-bold">166.4k</div>
                                        <p className='text-muted-foreground'>
                                            Old Patients
                                        </p>
                                        </div>
                                </div>
                            </CardTitle>
                            <div className='flex items-center gap-1'>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="h-4 w-4 text-primary"
                            >
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                            </svg>
                                <div className='text-primary'>14%</div>
                            </div>
                        </CardHeader>
                </Card>

            </div>
            <div className='p-4'>
                <div className='flex justify-between items-center'>
                    <div className="text-base font-bold">Gender</div>
                    <Year />
                </div>
                <Piechartcomponent />

            </div>
            {/* <DonutChartcomponent /> */}
            </div>
        </CardContent>
    </div>
  )
}


export default PatientStatsCard