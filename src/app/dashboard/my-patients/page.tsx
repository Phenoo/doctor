import Container from '@/components/Container'
import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import React from 'react'
import {PatientTable} from './PatientTable'

const Patientpage = () => {
  return (
    <Container>
      <Header title='Patient List'>
        <div>
          <Button>
            <Plus size={14} />
            Add Patient
          </Button>
        </div>
      </Header>
      <PatientTable />
    </Container>
    )
}

export default Patientpage
