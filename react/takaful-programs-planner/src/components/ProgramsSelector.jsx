import React from 'react'

export default function ProgramsSelector({ programs, setSelectedProgramId }) {
    return (
        <div>
            <select defaultValue={'اختر البرنامج'} className="select w-full max-w-xs" dir='rtl' onChange={(e) => setSelectedProgramId(e.target.value)}>
                <option disabled>اختر البرنامج</option>
                {
                    programs?.map(program => (
                        <option key={program.id} value={program.id}>{program.title}</option>
                    ))
                }
            </select>
        </div>
    )
}
