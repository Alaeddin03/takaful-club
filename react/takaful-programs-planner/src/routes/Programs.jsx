import React, { useEffect, useState } from 'react'
import MainContainer from '../components/MainContainer'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Glass from '../components/Glass'
import TabButton from '../components/TabButton'

export default function Programs() {

    const [isCurrentPrograms, setIsCurrentPrograms] = useState(true);
    const [programs, setPrograms] = useState([]);
    const [allPrograms, setAllPrograms] = useState([]);

    useEffect(() => {
        fetchPrograms();
        fetchAllPrograms();
    }, [isCurrentPrograms])

    async function fetchPrograms(){
        const res = await fetch('http://localhost:8000/currentPrograms');
        const data = await res.json();
        setPrograms(data);
    }

    async function fetchAllPrograms(){
        const res = await fetch('http://localhost:8000/allPrograms');
        const data = await res.json();
        setAllPrograms(data);
    }

    function toggleCurrentPrograms() {
        setIsCurrentPrograms(true);
    }

    function toggleAllPrograms() {
        setIsCurrentPrograms(false);
    }

    return (
        <div>
            <Header>
                <Navigation />
            </Header>

            <MainContainer>
                <div className='flex items-center justify-center w-full'>
                    <Glass>
                        <div className='p-8 flex items-center justify-center gap-8 text-white' dir='rtl'>
                            <TabButton onClick={toggleCurrentPrograms}
                            $active={isCurrentPrograms}>البرامج المتاحة</TabButton>
                            <TabButton onClick={toggleAllPrograms}
                            $active={!isCurrentPrograms}>جميع البرامج</TabButton>
                        </div>
                    </Glass>
                </div>

                    {isCurrentPrograms 
                        ?  
                        <div className='flex flex-wrap gap-8 p-8 items-center justify-start' dir='rtl'>
                            {programs?.map((program) => (
                                <div key={program.id}>
                                    <Glass>
                                        <div className='p-8 flex flex-col items-center justify-center gap-2 text-white max-w-xs'>
                                            <h1>
                                                {program.title}
                                            </h1>
                                            <h3>
                                                {program.description}
                                            </h3>
                                            <p>
                                                {program.dateTime}
                                            </p>
                                            <p>
                                                {program.registrationDateTime}
                                            </p>
                                            <p>
                                                {program.limit}
                                            </p>
                                        </div>
                                    </Glass>
                                </div>
                            ))}
                        </div>
                        :
                        <div className='flex flex-wrap gap-8 p-8 items-center justify-start' dir='rtl'>
                            {allPrograms?.map((program) => (
                                <div key={program.id}>
                                    <Glass>
                                        <div className='p-8 flex flex-col items-center justify-center gap-2 text-white max-w-xs'>
                                            <h1>
                                                {program.title}
                                            </h1>
                                            <h3>
                                                {program.description}
                                            </h3>
                                            <p>
                                                {program.dateTime}
                                            </p>
                                            <p>
                                                {program.registrationDateTime}
                                            </p>
                                            <p>
                                                {program.limit}
                                            </p>
                                        </div>
                                    </Glass>
                                </div>
                            ))}
                        </div>
                    }
                
            </MainContainer>
        </div>
    )
}
