import React, { useState } from 'react'
import Glass from '../components/Glass';
import TabButton from '../components/Programs/TabButton';
import AdminPrograms from '../components/admin/AdminPrograms';
import ManageDrivers from '../components/admin/ManageDrivers';

export default function Admin() {

  const [isProgramsTab, setIsProgramsTab] = useState(true);

  function toggleProgramsTab() {
    setIsProgramsTab(true);
  }

  function toggleDriversTab() {
    setIsProgramsTab(false);
  }

  return (
    <div>
      <div className='flex items-center justify-center w-full'>
        <Glass>
          <div className='p-8 flex items-center justify-center gap-8 text-light_gray' dir='rtl'>
            <TabButton onClick={toggleProgramsTab}
              $active={isProgramsTab}>
                إدارة البرامج
            </TabButton>
            <TabButton onClick={toggleDriversTab}
              $active={!isProgramsTab}>
                إدارة السائقين
            </TabButton>
          </div>
        </Glass>
      </div>

      {/* <div>
        feedback
      </div> */}

      {isProgramsTab
        ? <AdminPrograms />
        // ? <ProgramsList type={'current-programs'} />
        : <ManageDrivers />
      }
    </div>
  )
}
