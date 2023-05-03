import React from 'react'
import { Link } from 'react-router-dom'
import Glass from '../Glass'
import Detail from './Detail'
import defaultImage from './../../assets/logo-v.png'

export default function Program({ program, type }) {
    return (
        <>
            <Glass>
                <div className='p-8 flex flex-col items-center justify-between gap-4 text-light_gray max-w-xs h-[510px]'>
                    <div>
                        <img src={program.image ? program.image : defaultImage} alt="program image" />
                    </div>
                    <h1 className='text-2xl'>
                        {program.title}
                    </h1>
                    <div className='flex flex-col items-start gap-4 w-full' dir='rtl'>
                    {
                        type === 'current-programs' 
                        ? (
                            <div className='flex justify-center w-full'>
                                <Link to={`/programs/${program.id}`} className='transition-all py-1 px-4 rounded-lg bg-primary_blue text-light_gray border hover:bg-light_gray hover:text-primary_blue focus:bg-light_gray focus:text-primary_blue border-primary_blue flex items-center outline-none'>
                                        سجل الآن
                                </Link>
                            </div>
                        )
                        : (
                            <div>
                                <p className='text-sm'>
                                {program.description.length > 100
                                    ? program.description.substring(0, 100) + '...'
                                    : program.description}
                                </p>
                            </div>
                        )
                    }
                        <Detail title={'تاريخ البرنامج'} info={program.dateTime} />
                        <Detail title={'انتهاء التسجيل'} info={program.registrationDateTime} />
                        <Detail title={'الحد الأقصى للمشاركين'} info={program.limit} />
                    </div>
                </div>
            </Glass>
        </>
    )
}
