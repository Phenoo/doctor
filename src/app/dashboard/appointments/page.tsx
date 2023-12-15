import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import React from 'react'
import List from './List'
import Container from '@/components/Container'
import { ListBulletIcon } from '@radix-ui/react-icons'
import { IoIosMenu } from "react-icons/io";
import { BiSolidGrid } from "react-icons/bi";

const AppointmentPage = () => {
  return (
    <Container>
      <div className='h-full'>
      <Header title='Appointments'>
        <div className='space-x-4'>
          <Button>
            Clinic consulting
          </Button>
          <Button variant={"outline"}>
            video consulting  
          </Button>
        </div>
      </Header>

      <div>
        <h6>
          <strong>Showing:</strong> All Consultations Of All Healthcare Providers at Medisylhet
        </h6>
        <div className='space-x-4 flex items-center my-4'>
          <Button className='flex items-center gap-2'>List <ListBulletIcon /></Button>
          <Button className='flex items-center gap-2 text-foreground' variant={"outline"}>Week <BiSolidGrid /> </Button>
          <Button className='flex items-center gap-2 text-foreground' variant={"outline"}>Day <IoIosMenu /></Button>
        </div>
        <List />
      </div>
    </div>
    </Container>
  )
}

export default AppointmentPage