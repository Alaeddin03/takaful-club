import React from 'react'
import Detail from './Detail'
import { formatDate } from '../../helpers/helper'
import { Link } from 'react-router-dom'

export default function InnerProgramComponent({program, image, type}) {
    return (
        <div className='p-8 flex flex-col items-center justify-between gap-4 text-light_gray max-w-xs h-[510px]'>
            <div>
                {/* add image loading... */}
                <img src={image} alt="program image" className='w-full' />
            </div>
            <h1 className='text-2xl'>
                {program.title}
            </h1>
            <div className='flex flex-col items-start gap-4 w-full' dir='rtl'>
                {
                    program.registrationDateTime > new Date().toISOString() && type !== 'admin'
                        ? (
                            <div className='flex justify-center w-full'>
                                <Link to={`/programs/${program.id}`} className='transition-all py-1 px-4 rounded-lg bg-primary_blue text-light_gray border hover:bg-light_gray hover:text-primary_blue focus:bg-light_gray focus:text-primary_blue border-primary_blue flex items-center outline-none'>
                                    سجل الآن
                                </Link>
                            </div>
                        )
                        : type === 'admin' ? <></> : (
                            <div>
                                <p className='text-sm'>
                                    {program.description.length > 100
                                        ? program.description.substring(0, 100) + '...'
                                        : program.description}
                                </p>
                            </div>
                        )
                }
                <Detail title={'تاريخ البرنامج'} info={formatDate(program.dateTime)} />
                <Detail title={'انتهاء التسجيل'} info={formatDate(program.registrationDateTime)} />
                <Detail title={'الحد الأقصى للمشاركين'} info={program.limitOfParticipants} />


            </div>
        </div>
    )
}
