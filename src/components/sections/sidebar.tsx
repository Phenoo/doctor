"use client"
import React from 'react'
import Logo from './Logo'
import { BarChart4, Calendar, Clock, Code, CreditCard, Database,  MessageSquareDashed,  Settings, User2, VideoIcon } from "lucide-react";
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { MdDashboard } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";

const routes = [
  {
    label: 'Overview',
    icon:  MdDashboard,
    color: "text-green-700",
    href: '/dashboard',
  },
  {
    label: 'Appointments',
    icon: Calendar,
    color: "text-green-700",
    href: '/dashboard/appointments',
  },
  {
    label: 'My patients',
    icon: User2,
    href: '/dashboard/my-patients',
  },
  {
    label: 'Schedule timings',
    icon:  Clock,
    color: "text-green-700",
    href: '/dashboard/schedule',
  },
  {
    label: 'payments',
    icon: CreditCard,
    color: "text-green-700",
    href: '/dashboard/payments',
  },
  {
    label: 'Messages',
    icon: MessageSquareDashed,
    color: "text-green-700",
    href: '/dashboard/messages',
  },
  {
    label: 'blog',
    icon: IoNewspaperOutline,
    color: "text-green-700",
    href: '/dashboard/blogs',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/dashboard/settings',
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className='w-full pb-20 flex flex-col p-4 md:p-8 '>
      <Logo />

      <div className='mt-8'>
        <div className="space-y-1">
            {routes.map((route) => (
              <Link
                key={route.href} 
                href={route.href}
                className={cn(
                  "text-sm group flex capitalize p-3 w-full justify-start font-medium cursor-pointer  hover:bg-secondary-foreground/50 hover:text-background rounded-lg transition",
                  pathname === route.href ? "bg-secondary-foreground font-bold text-background " : "text-foreground",
                )}
              >
                <div className="flex items-center flex-1">
                  <route.icon className={cn("h-5 w-5 mr-3")} />
                  {route.label}
                </div>
              </Link>
            ))}
          </div>
      </div>
    </div>
  )
}

export default Sidebar