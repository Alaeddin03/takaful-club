import React from 'react'
import { Link } from 'react-router-dom'

export default function LinkContainer({ href, target, children, text }) {
  return (
    <div>
      <Link to={href} target={target} className='text-dark_gray outline-none hover:underline focus:underline'>
        <div className='flex items-center max-md:flex-col'>
          <div className='mx-2 mt-[2px] text-xl text-center'>
            {text}
          </div>
          {children}
        </div>
      </Link>
    </div>
  )
}
