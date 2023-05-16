import React, { useEffect, useState } from 'react'
import Glass from '../Glass';
import Table from '../Table';
import { MdAssignmentAdd } from 'react-icons/md';
import { TbSettings } from 'react-icons/tb';
import { FaTrash } from 'react-icons/fa';
import Modal from '../Modal';


export default function ManageDrivers() {

  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    fetchDrivers();
  }, [])

  async function fetchDrivers() {
    const res = await fetch(`http://localhost:8000/drivers`)
    const data = await res.json();
    setDrivers(data.drivers);
  }


  return (
    <>
      <div className='mt-8 flex flex-col items-center'>
        <Glass>
          <div className='p-8 flex flex-col items-center justify-center gap-8 w-[75vw]'>
            <div className='flex w-full items-center justify-between' dir='rtl'>
              <h2 className='form-h2 text-right text-neutral'>
                إدارة السائقين
              </h2>
              <span className='text-xs text-neutral'>
                العمليات الخاصة بالسائقين لا تعمل حالياً
              </span>
            </div>


              <Table headers={['اسم السائق', 'رقم الجوال', 'رقم الباص', 'سعة الباص', 'اسم المستخدم', 'العمليات']}>
                {
                  drivers?.map(driver => (
                    <tr key={driver.id}>
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
                  ))
                }
                {/* <tr>
            <td>----</td>
            <td>----</td>
            <td>----</td>
          </tr> */}
              </Table>

          </div>
        </Glass>
      </div>
    </>
  )
}
