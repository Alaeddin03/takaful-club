import React from 'react'
import LinkContainer from './LinkContainer'
import { FaGlobe, FaHome, FaPhoneAlt } from 'react-icons/fa'

export default function Navigation() {
  return (
    <ul className="header-ul flex items-center gap-6 mx-3">
        <li>
        <LinkContainer href={"/"} text={"الرئيسية"}>
            <FaHome fill='var(--dark_bg)' className='w-4' />
        </LinkContainer>
        </li>
        <li>
        <LinkContainer target="_blank" href="https://www.takaful.sa" text={"موقع تكافل"}>
            <FaGlobe fill='var(--dark_bg)' className='w-4' />
        </LinkContainer>
        </li>
        <li>
        <LinkContainer target={"_blank"} href={"https://www.takaful.sa/?p=22"} text={"اتصل بنا"}>
            <FaPhoneAlt fill='var(--dark_bg)' className='w-4' />
        </LinkContainer>
        </li>
    </ul>
  )
}
