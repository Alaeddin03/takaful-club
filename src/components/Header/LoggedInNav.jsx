import React from 'react'
import { MdWavingHand } from 'react-icons/md'
import { ImExit } from 'react-icons/im'
import { Link } from 'react-router-dom'
import { logOut } from '../../helpers/helper'

export default function LoggedInNav({ name }) {


    return (
        <div className='flex items-center justify-around gap-8 px-3'>

            <div className='flex items-center text-neutral'>
                <div className='mx-2 text-xl text-center'>
                    مرحباً {name.split(' ')[0]}
                </div>
                <MdWavingHand className='-scale-x-100 w-6 h-6' />
            </div>

            <Link to='/login' className='text-neutral link link-hover' onClick={() => logOut()}>
                <div className='flex items-center'>
                    <div className='mx-2 text-xl text-center'>
                        تسجيل الخروج
                    </div>
                    <ImExit className='-scale-x-100 w-6 h-6' />
                </div>
            </Link>

        </div>
    )
}
