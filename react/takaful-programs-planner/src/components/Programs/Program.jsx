import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Glass from '../Glass'
import Detail from './Detail'
import defaultImage from './../../assets/logo-v.svg'
import { formatDate } from './../../helpers/helper'

export default function Program({ program, type }) {

    const [image, setImage] = useState();

    useEffect(() => {
        if (program.image === 'logo.svg') return setImage(defaultImage);
        fetchImage();
    }, [])

    async function fetchImage(){
        const res = await fetch(`http://localhost:8000/static/${program.image}`);
        const imageBlob = await res.blob();
        const data = URL.createObjectURL(imageBlob);
        console.log(data);
        setImage(data);
    }

    return (
        <>
            <Glass>
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
                        type === 'programs/current' 
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
                        <Detail title={'تاريخ البرنامج'} info={formatDate(program.dateTime)} />
                        <Detail title={'انتهاء التسجيل'} info={formatDate(program.registrationDateTime)} />
                        <Detail title={'الحد الأقصى للمشاركين'} info={program.limitOfParticipants} />
                    </div>
                </div>
            </Glass>
        </>
    )
}
