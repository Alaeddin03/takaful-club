import React from 'react'

export default function MainContainer({ children, className }) {
    return (
        <div className={`
            min-h-screen w-full pt-36 pb-8 px-8 bg-gray-400 
            bg-[url('assets/overlay.svg')] bg-no-repeat bg-cover bg-center
            max-md:bg-[url('assets/overlay-mobile.svg')]
            max-md:pt-48
            ${className}
        `}>
            {children}
        </div>

    )
}
