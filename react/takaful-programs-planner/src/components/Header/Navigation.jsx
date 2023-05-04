import React from 'react'
import LinkContainer from './LinkContainer'
import { FaGlobe, FaHome, FaPhoneAlt, FaTelegramPlane, FaTwitter } from 'react-icons/fa'

export default function Navigation() {
  return (
    <ul className="flex items-center justify-around gap-8 px-3">
      <li>
        <LinkContainer href={"/"}>
          <FaHome className='w-6 h-6'/>
        </LinkContainer>
      </li>
      <li>
        <LinkContainer target={"_blank"} href={"https://www.takaful.sa"}>
          <FaGlobe className='w-6 h-6' />
        </LinkContainer>
      </li>
      <li>
          <LinkContainer target={'_blank'} href={'https://twitter.com/takafulsa'}>
            <FaTwitter className='w-6 h-6' />
          </LinkContainer>
      </li>
      <li>
          <LinkContainer target={'_blank'} href={'https://twitter.com/takafulsa'}>
            <FaTelegramPlane className='w-6 h-6' />
          </LinkContainer>
      </li>
    </ul>
  )
}
