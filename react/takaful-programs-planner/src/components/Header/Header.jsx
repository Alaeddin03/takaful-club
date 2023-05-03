import React from 'react'
import logo from './../../assets/logo-h.png'
import Container from '../Container'

export default function Header({ children }) {
  return (
    <div>
      <nav className="fixed w-full bg-gray-100 bg-opacity-50 backdrop-blur backdrop-filter firefox:bg-opacity-90 py-2 z-40" dir='rtl'>
        <Container className="flex items-center justify-end max-md:flex-col max-md:gap-8">
          <div className="ml-auto max-md:mx-auto">
            <img src={logo} alt="takaful logo" />
          </div>
          {children}
        </Container>
      </nav>
    </div>
  )
}
