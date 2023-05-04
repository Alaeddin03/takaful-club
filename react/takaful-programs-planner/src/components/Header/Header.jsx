import React from 'react'
import logo from './../../assets/logo-h.svg'
import Container from '../Container'
import { Link } from 'react-router-dom'

export default function Header({ children }) {
  return (
    <div className='h-fit'>
      <nav className="fixed w-full bg-gray-100 bg-opacity-50 backdrop-blur backdrop-filter firefox:bg-opacity-90 py-2 z-40" dir='rtl'>
        <Container className="flex items-center justify-end max-md:flex-col max-md:gap-8">
          <div className="ml-auto max-md:mx-auto">
            <Link to={"/"} className='outline-primary_blue outline-offset-4'>
              <img src={logo} alt="takaful logo" className='w-96'/>
            </Link>
          </div>
          {children}
        </Container>
      </nav>
    </div>
  )
}
