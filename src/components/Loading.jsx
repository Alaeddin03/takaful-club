import React from 'react'

export default function Loading({ loadingData }) {
    return (
        <div className='flex items-center justify-center text-base-200'>
            <div className='text-2xl' dir='rtl'>
                جاري تحميل {loadingData} ...
            </div>
        </div>
    )
}
