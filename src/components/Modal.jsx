import React from 'react'

export default function Modal({ modalName, handleSubmit, closeModalRef, error, submitText, isLoading, children }) {

    return (
        <>
            <input type="checkbox" id={modalName} className="modal-toggle" />
            <label htmlFor={modalName} className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col items-center justify-center gap-6 w-full relative">

                        <div className='modal-action'>
                            <label ref={closeModalRef} htmlFor={modalName}
                                className='btn btn-sm absolute left-2 top-2 bg-base-100 border-secondary text-secondary hover:bg-secondary hover:border-secondary hover:text-base-200'>
                                x
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            {children}
                            {error &&
                                <label className="label">
                                    <span className="label-text-alt text-error">{error}</span>
                                </label>
                            }
                        </div>

                        {isLoading
                            ? <button className="btn btn-secondary btn-outline loading flex gap-4">جاري التحميل</button>
                            : <button type='submit' className='btn btn-secondary btn-outline'>
                                {submitText}
                            </button>
                        }

                    </form>
                </label>
            </label>

        </>
    )
}
