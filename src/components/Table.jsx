import React from 'react'

export default function Table({ headers, children }) {
    return (
        <>
            <div className='overflow-x-scroll w-full'>

                <table className="driver-table  w-full text-center" dir='rtl'>
                    <thead>
                        <tr id="header">
                            {headers?.map((header, index) => (
                                <th key={'th-' + index}>{header}</th>
                            ))
                            }
                        </tr>
                    </thead>

                    <tbody>
                        {children}
                    </tbody>

                </table>
            </div>
        </>
    )
}
