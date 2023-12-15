import { Card, CardContent } from '@/components/ui/card';
import { Check, Clock, Paperclip, Stethoscope } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

import { LuFileSpreadsheet, LuClock10 } from "react-icons/lu";

import { CiStethoscope, CiMicrophoneOn } from "react-icons/ci";
import { Button } from '@/components/ui/button';

import { LiaTimesSolid } from "react-icons/lia";
import { MdOutlineCheck } from "react-icons/md";
import { cn } from '@/lib/utils';
import { GoDotFill } from 'react-icons/go';


const List = () => {
    const consultations = [
        {
          id: 1,
          image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600',
          name: 'Alice Johnson',
          date: '2023-12-15',
          time: '09:00 AM',
          symptoms: 'Sore throat and fatigue',
          payment: 'Free',
          status: 'Confirmed',
          consultationType: 'Video Consulting',
        },
        {
          id: 2,
          image: 'https://images.pexels.com/photos/19330234/pexels-photo-19330234/free-photo-of-man-in-suit-sitting-by-chess.jpeg?auto=compress&cs=tinysrgb&w=600',
          name: 'Bob Smith',
          date: '2023-12-16',
          time: '11:30 AM',
          symptoms: 'Fever and body ache',
          payment: 'Paid',
          status: 'Awaiting',
          consultationType: 'Clinic',
        },
        {
          id: 3,
          image: 'https://images.pexels.com/photos/19355360/pexels-photo-19355360/free-photo-of-portrait-of-an-elderly-man-in-a-baseball-cap.jpeg?auto=compress&cs=tinysrgb&w=600',
          name: 'Charlie Brown',
          date: '2023-12-17',
          time: '02:00 PM',
          symptoms: 'Cough and runny nose',
          payment: 'Free',
          status: 'Confirmed',
          consultationType: 'Video Consulting',
        },
        {
          id: 4,
          image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600',
          name: 'Diana Miller',
          date: '2023-12-18',
          time: '04:45 PM',
          symptoms: 'Headache and dizziness',
          payment: 'Paid',
          status: 'Confirmed',
          consultationType: 'Clinic',
        },
        {
          id: 5,
          image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=600',
          name: 'Ethan Wilson',
          date: '2023-12-19',
          time: '10:15 AM',
          symptoms: 'Stomachache and nausea',
          payment: 'Paid',
          status: 'Awaiting',
          consultationType: 'Video Consulting',
        },
        {
          id: 6,
          image: 'https://images.pexels.com/photos/713312/pexels-photo-713312.jpeg?auto=compress&cs=tinysrgb&w=600',
          name: 'Fiona Clark',
          date: '2023-12-20',
          time: '01:30 PM',
          symptoms: 'Shortness of breath',
          payment: 'Free',
          status: 'Awaiting',
          consultationType: 'Clinic',
        },
      ];
      
  return (
    <div className='space-y-4'>
        {
            consultations.map((item) => {
                return (
                    <Card key={item.id}>
                        <CardContent className='p-4'>
                           <section className='flex justify-between flex-col md:flex-row gap-4'>
                                <div className='flex gap-4 h-full '>
                                    <div className='w-28 h-28 relative flex items-center '>
                                        <Image src={item.image} alt={item.name} fill className='w-full h-full aspect-square object-cover object-top' />
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className='font-bold'>{item.name}</h4>
                                        <div className='grid grid-cols-1  md:grid-cols-2 gap-2  md:gap-4 text-sm'>
                                            <span className='flex gap-1 items-center'>
                                                <CiStethoscope />
                                                <p>
                                                    {item.consultationType}
                                                </p>
                                            </span>
                                            <span className='flex gap-1 items-center'>
                                                <LuClock10 />
                                                <p>
                                                    {item.time}, {item.date}
                                                </p>
                                            </span>
                                            {
                                                item.consultationType !== "Clinic" && (
                                                    <span className='flex gap-1 items-center text-primary'>
                                                        <CiMicrophoneOn />
                                                        <p>Check Camera & Mic</p>
                                                    </span>
                                                )
                                            }
                                            <span className='flex gap-1 items-center'>
                                                <LuFileSpreadsheet />
                                                <p>{item.symptoms}</p>
                                            </span>
                                        </div>
                                       
                                    </div>
                                </div>
                                <div className='space-y-4' >
                                    <div className='flex flex-wrap gap-2 items-end  '>
                                        <Button variant={"outline"} className='flex items-center gap-2'>
                                            <LiaTimesSolid /> Cancel
                                        </Button>
                                        {
                                            item.status === "Awaiting" && (
                                                <>
                                                    <Button variant={"outline"} className='flex items-center gap-2'>
                                                        <LuClock10 />
                                                        Reschedule
                                                    </Button>
                                                    <Button className='bg-yellow-500 flex items-center gap-2'>
                                                        <MdOutlineCheck />
                                                        Confirm
                                                    </Button>
                                                </>
                                            )
                                        }
                                        {
                                            item.status === "Confirmed" && item.consultationType === "Clinic" && (
                                                <Button className='bg-sky-400 text-white flex items-center gap-2'>
                                                    <MdOutlineCheck /> Start Consultation
                                                </Button>
                                            )
                                        }
                                         {
                                            item.status === "Confirmed" && item.consultationType !== "Clinic" && (
                                                <Button className='text-white flex items-center gap-2'>
                                                    <MdOutlineCheck /> Start Consultation
                                                </Button>
                                            )
                                        }
                                    </div>
                                    <div className='text-right flex items-center md:justify-end w-full'>
                                        {
                                            item.consultationType === "Clinic" ?
                                            <p className={cn("flex items-center  text-right text-sm", item.status === "Awaiting" ? "text-yellow-500" : "text-sky-400")}>
                                            <GoDotFill />  {item.status}
                                          </p>
                                            :
                                            <p className={cn("flex items-center  text-right text-sm", item.status === "Awaiting" ? "text-yellow-500" : "text-primary")}>
                                            <GoDotFill />  {item.status}
                                          </p>
                                        }
                                       
                                    </div>
                                    <div className='text-right flex gap-2 text-sm items-center md:justify-end w-full'>
                                        <p>
                                            {item.payment}
                                        </p>
                                        <MdOutlineCheck size={14} />
                                    </div>
                                </div>
                           </section>
                        </CardContent>
                    </Card>
                )
            })
        }
    </div>
  )
}

export default List