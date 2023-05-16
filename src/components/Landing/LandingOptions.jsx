import React from 'react'
import { Link } from 'react-router-dom'
import Glass from '../Glass'

export default function LandingOptions({href, icon, title}) {
  return (
    <Link to={href} className="hover:scale-105 focus:scale-105 outline-none transition-transform">
        <Glass className={"cursor-pointer"}>
            <div className="py-8 px-8 flex flex-col items-center justify-around gap-8">
                <img src={icon} alt={`${title}-icon`} className="w-16" />
                <h2 className='text-center text-4xl text-white'>
                    {title}
                </h2>
            </div>
        </Glass>
    </Link>
  )
}
