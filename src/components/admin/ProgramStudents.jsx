import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Table from '../Table';
import Glass from '../Glass';
import { getItem } from '../../helpers/helper';

export default function ProgramStudents() {

  const { id } = useParams();

  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchProgramStudents();
  }, [])

  async function fetchProgramStudents() {
    const res = await fetch(`http://localhost:8000/programs/${id}/students`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        role: getItem('role'),
      }),
    })

    const data = await res.json();

    setStudents(data.students);

  }

  return (
    <>
      <div className='flex flex-col items-center'>
        <Glass>
          <div className='p-8 flex flex-col items-center justify-center gap-8 w-[75vw]'>
            <div className='flex w-full items-center justify-between' dir='rtl'>
              <h2 className='form-h2 text-right text-neutral'>
                طلاب برنامج {id}
              </h2>
              <div className="text-sm breadcrumbs text-neutral">
                <ul>
                  <li><Link to='/'>الرئيسية</Link></li>
                  <li><Link to='/staff/admin'>إدارة البرامج</Link></li>
                  <li>طلاب برنامج {id}</li>
                </ul>
              </div>

            </div>

            <Table headers={['رقم الهوية', 'اسم الطالب', 'رقم الجوال', 'العمر', 'الجنسية', 'الجنس', 'ملاحظات']}>
              {
                students?.map((student, index) => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.phone}</td>
                    <td>{student.age}</td>
                    <td>{student.nationality}</td>
                    <td>{student.gender}</td>
                    <td>{student.notes}</td>
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
