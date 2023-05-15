import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Glass from '../Glass'
import InnerProgramComponent from './InnerProgramComponent'
import defaultImage from './../../assets/logo-v.svg'
import { CiEdit } from 'react-icons/ci'
import { FaTrash } from 'react-icons/fa'
import Modal from '../Modal'
import ProgramInput from './ProgramInput'

export default function Program({ program, type }) {

    const closeEditModalRef = useRef(null);
    const closeDeleteModalRef = useRef(null);

    const [image, setImage] = useState();

    const [isEditLoading, setIsEditLoading] = useState(false);
    const [isDeleteLoading, setIsDeleteLoading] = useState(false);

    const [programTitle, setProgramTitle] = useState(program.title);
    const [programDescription, setProgramDescription] = useState(program.description);
    const [programDateTime, setProgramDateTime] = useState(new Date(program.dateTime).toISOString().slice(0, 16));
    const [programRegistrationDeadline, setProgramRegistrationDeadline] = useState(new Date(program.registrationDateTime).toISOString().slice(0, 16));
    const [programRegistrationLimit, setProgramRegistrationLimit] = useState(program.limitOfParticipants);

    useEffect(() => {
        fetchImage();
    }, [])

    async function fetchImage() {
        if (program.image === 'logo.svg') return setImage(defaultImage);
        const res = await fetch(`http://localhost:8000/static/${program.image}`);
        const imageBlob = await res.blob();
        const data = URL.createObjectURL(imageBlob);
        setImage(data);
    }

    async function handleEdit(e) {
        e.preventDefault();

        setIsEditLoading(true);

        const res = await fetch(`http://localhost:8000/programs/${program.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                program: {
                    title: programTitle,
                    description: programDescription,
                    dateTime: programDateTime,
                    registrationDateTime: programRegistrationDeadline,
                    limitOfParticipants: programRegistrationLimit
                }
            }),
        })

        const data = await res.json();
        console.log(data);

        setIsEditLoading(false);

        closeEditModalRef.current.click()
    }

    async function handleDelete(e) {

        e.preventDefault();
        setIsDeleteLoading(true);

        const res = await fetch(`http://localhost:8000/programs/${program.id}`, {
            method: 'DELETE',
        })
        const data = await res.json();
        console.log(data);

        setIsDeleteLoading(false);
        closeDeleteModalRef.current.click()
    }

    return (
        <>
            {type === 'admin' &&
                (
                    <>
                        <Modal
                            modalName={`edit-program-${program.id}`}
                            handleSubmit={handleEdit}
                            closeModalRef={closeEditModalRef}
                            submitText='تعديل'
                            isLoading={isEditLoading}
                        >
                            <div className="form-control w-full max-w-xs gap-6">
                                <h1 className='text-center text-primary'>
                                    تعديل {program.title}
                                </h1>

                                <ProgramInput label={'اسم البرنامج'} type={'text'} placeholder={'اسم البرنامج'} maxLength={50} state={programTitle} setState={setProgramTitle} />

                                <ProgramInput label={'وصف البرنامج'} type={'text'} placeholder={'وصف البرنامج'} state={programDescription} setState={setProgramDescription} />

                                <ProgramInput label={'تاريخ البرنامج'} type={'datetime-local'} state={programDateTime} setState={setProgramDateTime} />

                                <ProgramInput label={'تاريخ التسجيل'} type={'datetime-local'} state={programRegistrationDeadline} setState={setProgramRegistrationDeadline} />

                                <ProgramInput label={'حد التسجيل'} type={'number'} placeholder={'العدد الأقصى من الطلاب'} state={programRegistrationLimit} setState={setProgramRegistrationLimit} />
                            </div>
                        </Modal>
                        <Modal
                            modalName={`delete-program-${program.id}`}
                            handleSubmit={handleDelete}
                            closeModalRef={closeDeleteModalRef}
                            submitText='حذف'
                            isLoading={isDeleteLoading}
                        >
                            <div className="form-control w-full max-w-xs gap-6">
                                <h1 className='text-center text-error'>
                                    حذف {program.title}
                                </h1>
                                <p className='text-center text-neutral'>
                                    هل أنت متأكد من حذف البرنامج؟
                                </p>
                            </div>

                        </Modal>
                    </>
                )}
            <Glass>
                {
                    type === 'admin'
                        ? (
                            <Link to={`/staff/admin/program/${program.id}`}>
                                <InnerProgramComponent program={program} image={image} type={type} />
                            </Link>
                        )
                        : <InnerProgramComponent program={program} image={image} type={type} />

                }
                {
                    type === 'admin' &&
                    <div className='flex justify-center w-80 gap-4 p-8 border-t border-gray-500'>

                        <label htmlFor={`edit-program-${program.id}`} className='btn btn-neutral btn-outline flex items-center text-neutral cursor-pointer'>
                            <CiEdit className='w-6 h-6' />
                        </label>

                        <label htmlFor={`delete-program-${program.id}`} className='btn btn-neutral btn-outline flex items-center text-error cursor-pointer'>
                            <FaTrash className='w-6 h-6' />
                        </label>
                    </div>
                }
            </Glass>
        </>
    )
}
