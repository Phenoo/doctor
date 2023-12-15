'use client'

import React from 'react'

const Container = ({children}: {children : React.ReactNode}) => {
  return (
    <div className='max-w-full lg:mx-12 md:mx-8 sm:mx-6 mx-2 py-4 md:py-8'>
        {children}
    </div>
  )
}

export default Container