import React, { useState } from 'react'
import Glass from '../components/Glass'
import TabButton from '../components/Programs/TabButton'
import ProgramsList from '../components/Programs/ProgramsList'

export default function Programs() {

    const [isCurrentPrograms, setIsCurrentPrograms] = useState(true);

    function toggleCurrentPrograms() {
        setIsCurrentPrograms(true);
    }

    function toggleAllPrograms() {
        setIsCurrentPrograms(false);
    }

    return (
        <div>
                <div className='flex items-center justify-center w-full'>
                    <Glass>
                        <div className='p-8 flex items-center justify-center gap-8 text-light_gray' dir='rtl'>
                            <TabButton onClick={toggleCurrentPrograms}
                            $active={isCurrentPrograms}>البرامج المتاحة</TabButton>
                            <TabButton onClick={toggleAllPrograms}
                            $active={!isCurrentPrograms}>جميع البرامج</TabButton>
                        </div>
                    </Glass>
                </div>
                
                {isCurrentPrograms 
                    ? <ProgramsList type={'programs/current'} />
                    // ? <ProgramsList type={'current-programs'} />
                    : <ProgramsList type={'programs'} />
                }
        </div>
    )
}
