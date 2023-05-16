import React, { useEffect, useState } from 'react'
import Program from './Program';
import Loading from '../Loading';

export default function ProgramsList({ type }) {

    const [programs, setPrograms] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchPrograms();
    }, [type])

    async function fetchPrograms() {
        setIsLoading(true);
        const res = await fetch(`http://localhost:8000/${type}`);
        const data = await res.json();
        setPrograms(data.programs);
        setIsLoading(false);
    }

    return (
        <>
            <div className='flex flex-wrap gap-8 p-8 items-center justify-center max-md:justify-center w-full' dir='rtl'>
                {
                    isLoading ? <Loading loadingData={'البرامج'} /> : ( <>
                        { programs?.map((program) => (
                            <div key={program.id}>
                                <Program program={program} type={type} />
                            </div>
                        ))}
                        </> )

                }
            </div>
        </>
    )
}
