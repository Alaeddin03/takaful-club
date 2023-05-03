import React, { useEffect, useState } from 'react'
import Program from './Program';

export default function ProgramsList({ type }) {
    
    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        fetchPrograms();
    }, [type])

    async function fetchPrograms(){
        const res = await fetch(`http://localhost:8000/${type}`);
        const data = await res.json();
        setPrograms(data);
    }

  return (
    <div className='flex flex-wrap gap-8 p-8 items-center justify-start max-md:justify-center w-full' dir='rtl'>
        {programs?.map((program) => (
            <div key={program.id}>
                <Program program={program} type={type}/>
            </div>
        ))}
    </div>
  )
}
