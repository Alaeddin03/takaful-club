import React from 'react'
import { Link } from 'react-router-dom'

export default function LinkContainer({ href, target, children, }) {
  return (
    <div>
      <Link target={target} to={href} className='text-dark_gray outline-none hover:text-light_gray focus:text-light_gray transition-colors'>
        {children}
      </Link>
    </div>
  )
}
