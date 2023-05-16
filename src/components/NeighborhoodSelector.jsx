import React from 'react'

export default function NeighborhoodSelector({ list, setState }) {

    return (
        <div className='w-full'>
            <select defaultValue={'اختر الحي'} name='neighborhood' className="select w-full max-w-xs" dir='rtl' onChange={(e) => setState(e.target.value)}>
                <option disabled>اختر الحي</option>
                {
                    list?.map(neighborhood => (
                        <option key={neighborhood.id} value={neighborhood.id}>{neighborhood.name}</option>
                    ))
                }
            </select>
        </div>
    )
}
