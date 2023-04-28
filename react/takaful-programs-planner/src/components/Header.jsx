import React from 'react'
import logo from '../assets/logo-h.png'
import Container from './Container'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <nav className="fixed w-full bg-gray-100 bg-opacity-50 backdrop-blur backdrop-filter firefox:bg-opacity-90 py-2 z-40" dir='rtl'>
        <Container className="flex items-center justify-end max-md:flex-col max-md:gap-8">
            <div className="ml-auto max-md:mx-auto">
              <img src={logo} alt="takaful logo" />
            </div>
            <ul className="header-ul flex gap-6">
              <li>
                <Link to="/">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link target="_blank" to="https://www.takaful.sa">
                  موقع تكافل
                </Link>
              </li>
              <li>
                <Link target="_blank" to="https://www.takaful.sa/?p=22">
                  اتصل بنا
                </Link>
              </li>
            </ul>
        </Container>
      </nav>
    </div>
  )
}
