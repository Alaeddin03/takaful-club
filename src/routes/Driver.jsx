import React, { useEffect, useState } from 'react'
import Glass from '../components/Glass'
import { formatDate, getItem } from '../helpers/helper';
import ProgramsSelector from '../components/ProgramsSelector';
import Table from '../components/Table';

export default function Driver() {

  const [programs, setPrograms] = useState([]);
  const [selectedProgram, setSelectedProgram] = useState({});
  const [selectedProgramId, setSelectedProgramId] = useState('');
  const [students, setStudents] = useState([]);
  const [neighborhoods, setNeighborhoods] = useState([]);

  useEffect(() => {
    fetchPrograms();
  }, [])

  useEffect(() => {
    changeProgram(selectedProgramId, programs);
    fetchStudents();
  }, [selectedProgramId])


  function changeProgram(id, programs) {
    programs.forEach(program => {
      if (program.id + '' === id) {
        return setSelectedProgram(program);
      }
    });
  }

  async function fetchPrograms() {    
    const res = await fetch('http://localhost:8000/programs');
    const data = await res.json();
    
    let currentPrograms = data.programs.filter(program => {
      return new Date(program.dateTime) > new Date().getTime();
    });


    setPrograms(currentPrograms);
  }

  // not done yet
  async function fetchStudents() {
    if (! selectedProgramId) return;
    const res = await fetch(`http://localhost:8000/drivers/${getItem('accountId')}/students`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        role: getItem('role'), 
        programId: selectedProgramId
      }),
    });

    const data = await res.json();

    console.log(data);
    setStudents(data.students);
    setNeighborhoods(data.neighborhoods);
  }

  return (
    <div className='flex flex-col items-center'>
      <Glass>
        <div className='p-8 flex flex-col items-center justify-center gap-8 w-[75vw]'>

          <div className='flex justify-between w-full'>

            <ProgramsSelector programs={programs} setSelectedProgramId={setSelectedProgramId} />

            {selectedProgram &&
              <div className='text-neutral' dir='rtl'>
                <h1 className='text-2xl mb-4'>{selectedProgram.title}</h1>
                <span>{formatDate(selectedProgram.dateTime, '')}</span>
              </div>
            }

          </div>

          <Table headers={['اسم الطالب', 'الحي', 'رقم الجوال']}>
            {
              students?.map((student, index) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{neighborhoods[index].name}</td>
                  <td>{student.phone}</td>
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
  )
}
