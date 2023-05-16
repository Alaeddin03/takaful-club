import React from 'react'
import { MdAssignmentAdd } from 'react-icons/md';
import { TbSettings } from 'react-icons/tb';
import { FaTrash } from 'react-icons/fa';

export default function DriverRow({driver}) {
    return (
        <tr>
            <td>{driver.name}</td>
            <td>{driver.phone}</td>
            <td>{driver.busNumber}</td>
            <td>{driver.busLimit}</td>
            <td>{driver.username}</td>
            <td className='flex items-center justify-center overflow-x-scroll'>
                <div className='flex gap-4'>
                    <button className='btn btn-primary btn-outline gap-2'>
                        <MdAssignmentAdd className='text-xl' />
                        تعيين
                    </button>
                    <button className='btn btn-secondary btn-outline gap-2'>
                        <TbSettings className='text-xl' />
                        تعديل
                    </button>
                    <button className='btn btn-error btn-outline gap-2'>
                        <FaTrash className='text-xl' />
                        حذف
                    </button>
                </div>
            </td>
        </tr>
    )
}
