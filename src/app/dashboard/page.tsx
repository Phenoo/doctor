import Container from '@/components/Container'
import StatsGrid from '@/components/StatsGrid'
import Welcome from '@/components/welcome'
import React from 'react'
import { Appointlist } from '../../components/Appointlist'
import PatientStatsCard from '@/components/PatientStatsCard'
import TodayAppointment from '@/components/TodayAppointment'
import { RecentPatients } from '@/components/RecentPatients'

const Dashbaoardpage = () => {
  return (
    <div className='w-full space-y-8'>
      <Container>
        <Welcome />
        <StatsGrid />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
          <Appointlist />
          <PatientStatsCard />
          <TodayAppointment />
        </div>
        <RecentPatients />
      </Container>
    </div>
  )
}

export default Dashbaoardpage