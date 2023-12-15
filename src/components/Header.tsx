import React from 'react'

interface HeaderProps{
    children?: React.ReactNode
    title: string
}
const Header = ({children, title}: HeaderProps) => {
  return (
    <div className='flex justify-between my-4 flex-wrap'>
        <div>
            <h4 className='font-bold text-2xl'>{title}</h4>
        </div>
        <div>
            {children}
        </div>
    </div>
  )
}

export default Header