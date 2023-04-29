import React from 'react'

export default function MainContainer({ children, className }) {
    return (
        <div className="landing-main h-screen w-full pt-36 px-8">
            <div className={`flex items-center justify-center w-full h-full ${className}`}>
                {children}
            </div>
        </div>

    )
}
