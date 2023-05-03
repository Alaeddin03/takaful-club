import React, { useState } from 'react'
import MainContainer from '../components/MainContainer'
import Header from '../components/Header/Header'
import Navigation from '../components/Header/Navigation'
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
            <Header>
                <Navigation />
            </Header>

            <MainContainer>
                <div className='flex items-center justify-center w-full max-md:pt-20'>
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
                    ? <ProgramsList type={'current-programs'} />
                    : <ProgramsList type={'all-programs'} />
                }
            </MainContainer>
        </div>
    )
}
