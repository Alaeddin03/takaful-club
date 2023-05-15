import React from 'react'
import CenterMainContainer from "../components/CenterMainContainer"
import { Link } from 'react-router-dom'
import { TbArrowBackUp } from 'react-icons/tb'

export default function PostRegistration() {
    return (
        <div>
            <CenterMainContainer>
                <div className='flex flex-col items-center justify-center h-full gap-8 text-base-200'>
                    <div className='text-4xl' dir='rtl'>
                        شكرا لتسجيلك في البرنامج 
                    </div>
                    <Link to='/programs' className='btn gap-2 btn-info btn-outline text-2xl' dir='rtl'>
                        العودة للبرامج
                        <TbArrowBackUp className='w-6 h-6'/>
                    </Link>

                </div>
            </CenterMainContainer>
        </div>
    )
}
