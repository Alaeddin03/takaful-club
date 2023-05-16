import React, { useEffect, useRef, useState } from 'react'
import Glass from '../Glass';
import Table from '../Table';
import DriverRow from '../DriverRow';
import { getItem } from '../../helpers/helper';
import Modal from '../Modal';
import Loading from '../Loading';



export default function ManageTransports() {

  const closeAddNeighborhoodModalRef = useRef(null);

  const [drivers, setDrivers] = useState([]);

  const [neighborhood, setNeighborhood] = useState('');
  const [sequence, setSequence] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [isLoadingDrivers, setIsLoadingDrivers] = useState(false);

  useEffect(() => {
    fetchDrivers();
  }, [])

  async function fetchDrivers() {
    setIsLoadingDrivers(true);
    const res = await fetch(`http://localhost:8000/drivers`)
    const data = await res.json();
    setDrivers(data.drivers);
    setIsLoadingDrivers(false);
  }

  async function handleAddNeighbor(e) {

    e.preventDefault();
    setIsLoading(true);

    const res = await fetch(`http://localhost:8000/neighborhood`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        role: getItem('role'),
        neighborhood: {
          name: neighborhood,
          sequence: sequence
        }
      })
    })

    const data = await res.json();
    console.log(data);

    setIsLoading(false);
    setNeighborhood('');
    setSequence('');

    closeAddNeighborhoodModalRef.current.click();

  }

  return (
    <>
      <Modal
        modalName='add-neighborhood-modal'
        handleSubmit={handleAddNeighbor}
        closeModalRef={closeAddNeighborhoodModalRef}
        submitText='إضافة'
        isLoading={isLoading}
      >
        <div className="form-control w-full max-w-xs gap-6" dir='rtl'>
          <h1 className='text-center text-primary'>
            إضافة حي جديد
          </h1>
          <input
            type="text"
            placeholder="اسم الحي"
            className="input input-primary"
            onChange={(e) => setNeighborhood(e.target.value)}
          />
          <input
            type="number"
            placeholder="التسلسل"
            className="input input-primary"
            onChange={(e) => setSequence(e.target.value)}
          />
        </div>
      </Modal>
      <div className='mt-8 flex flex-col items-center'>
        <Glass>
          <div>

            <div className='p-8 flex flex-col items-center justify-center gap-8 w-[75vw] border-b border-gray-400'>
              <div className='flex w-full items-center justify-between' dir='rtl'>
                <h2 className='form-h2 text-right text-neutral'>
                  الأحياء
                </h2>
                <label htmlFor={`add-neighborhood-modal`} className='btn btn-primary btn-outline flex items-center text-neutral cursor-pointer'>
                  إضافة حي جديد
                </label>
              </div>
            </div>

            <div className='p-8 flex flex-col items-center justify-center gap-8 w-[75vw]'>
              <div className='flex w-full items-center justify-between' dir='rtl'>
                <h2 className='form-h2 text-right text-neutral'>
                  إدارة السائقين
                </h2>
                <span className='text-xs text-neutral'>
                  العمليات الخاصة بالسائقين لا تعمل حالياً
                </span>
              </div>

              {isLoadingDrivers ? <Loading loadingData={'السائقين'} /> :
                <Table headers={['اسم السائق', 'رقم الجوال', 'رقم الباص', 'سعة الباص', 'اسم المستخدم', 'العمليات']}>
                  {
                    drivers?.map(driver => (
                      <DriverRow key={driver.id} driver={driver} />
                    ))
                  }
                </Table>
              }

            </div>

          </div>
        </Glass>
      </div>
    </>
  )
}
