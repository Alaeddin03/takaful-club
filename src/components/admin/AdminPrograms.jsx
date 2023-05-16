import React, { useEffect, useRef, useState } from 'react'
import Program from '../Programs/Program';
import Glass from '../Glass';
import { HiPlusCircle } from 'react-icons/hi';
import Modal from '../Modal';
import ProgramInput from '../Programs/ProgramInput';
import { getItem } from '../../helpers/helper';

export default function AdminPrograms() {

    const closeAddModalRef = useRef(null);

    const [programs, setPrograms] = useState([]);
    const [changed, setChanged] = useState(false);

    const [programTitle, setProgramTitle] = useState('');
    const [programDescription, setProgramDescription] = useState('');
    const [programDateTime, setProgramDateTime] = useState('');
    const [programRegistrationDeadline, setProgramRegistrationDeadline] = useState('');
    const [programRegistrationLimit, setProgramRegistrationLimit] = useState('');
    const [programImage, setProgramImage] = useState();
    const [programImageName, setProgramImageName] = useState('logo.svg');

    const [loading, setLoading] = useState(false);


    useEffect(() => {
        fetchPrograms();
    }, [changed])

    async function fetchPrograms() {
        const res = await fetch(`http://localhost:8000/programs`);
        const data = await res.json();
        setPrograms(data.programs);
        // setPrograms(data);
    }

    function handleFileUpload(e) {
        if (e.target.files[0]) {
            setProgramImage(e.target.files[0]);
            setProgramImageName(e.target.files[0].name);
        }
    }

    async function handleAddSubmit(e) {
        e.preventDefault();

        setLoading(true);

        const res = await fetch('http://localhost:8000/programs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                role: getItem('role'),
                program: {
                    title: programTitle,
                    description: programDescription,
                    dateTime: programDateTime,
                    registrationDateTime: programRegistrationDeadline,
                    limitOfParticipants: programRegistrationLimit,
                    image: programImageName
                }
            }),
        });

        const data = await res.json();
        console.log(data);

        if (programImage) {
            const formData = new FormData();
            formData.append('file', programImage);
            const res = await fetch(`http://localhost:8000/upload`, {
                method: 'POST',
                body: formData
            });
            const data = await res.json();
            console.log(data);
        }

        setProgramTitle('');
        setProgramDescription('');
        setProgramDateTime('');
        setProgramRegistrationDeadline('');
        setProgramRegistrationLimit('');
        setProgramImage('');
        setProgramImageName('logo.svg');
        setLoading(false);
        setChanged(!changed);
        closeAddModalRef.current.click();
    }

    return (
        <div>
            <div className='flex flex-wrap gap-8 p-8 items-center justify-center max-md:justify-center w-full' dir='rtl'>
                <div>
                    <Modal
                        modalName={'add-program'}
                        handleSubmit={handleAddSubmit}
                        closeModalRef={closeAddModalRef}
                        submitText={'اضافة'}
                        isLoading={loading}
                    >
                        <div className="form-control w-full max-w-xs gap-6">

                            <h1 className='text-center text-primary'>
                                إضافة برنامج جديد
                            </h1>

                            <ProgramInput label={'اسم البرنامج'} type={'text'} placeholder={'اسم البرنامج'} maxLength={50} state={programTitle} setState={setProgramTitle} />

                            <ProgramInput label={'وصف البرنامج'} type={'text'} placeholder={'وصف البرنامج'} state={programDescription} setState={setProgramDescription} />

                            <ProgramInput label={'تاريخ البرنامج'} type={'datetime-local'} state={programDateTime} setState={setProgramDateTime} />

                            <ProgramInput label={'تاريخ التسجيل'} type={'datetime-local'} state={programRegistrationDeadline} setState={setProgramRegistrationDeadline} />

                            <ProgramInput label={'حد التسجيل'} type={'text'} pattern={'[0-9]+'} placeholder={'العدد الأقصى من الطلاب'} state={programRegistrationLimit} setState={setProgramRegistrationLimit} />

                            <div >
                                <label className="label">
                                    <span className="label-text text-primary">شعار البرنامج</span>
                                </label>
                                <input
                                    onChange={(e) => handleFileUpload(e)}
                                    type="file"
                                    className="file-input file-input-bordered file-input-primary w-full max-w-xs"
                                    dir='ltr' />
                                <label className="label">
                                    <span className="label-text-alt text-warning">تحميل الشعار اختياري. في حال عدم التحميل، سيتم استخدام شعار النادي.</span>
                                </label>
                            </div>

                        </div>
                    </Modal>

                    <label htmlFor={'add-program'} className='cursor-pointer'>
                        <Glass>
                            <div className='p-8 flex items-center justify-center text-light_gray h-[624px]' dir='rtl'>
                                <HiPlusCircle className='w-64 h-64' />
                            </div>
                        </Glass>
                    </label>

                </div>
                {
                    programs?.map((program) => (
                        <div key={program.id}>
                            <Program program={program} type={'admin'} setChanged={setChanged} changed={changed}/>
                        </div>
                    ))
                }
            </div >
        </div >
    )
}
