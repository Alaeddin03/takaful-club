import React from 'react'

export default function Detail({ title, info }) {
  return (
    <div className='text-light_gray flex items-center justify-center gap-4'>
        <span>
            {title}:
        </span>
        <span className='mt-[2px]'>
            {info}
        </span>
    </div>
  )
}
