import React, { useEffect, useRef, useState } from 'react'
import Glass from '../components/Glass'
import { Link, useNavigate, useParams } from 'react-router-dom'
import FormInput from '../components/FormInput';
import NeighborhoodSelector from '../components/NeighborhoodSelector';
import defaultImage from '../assets/logo-v.svg'


export default function ProgramForm() {

  const { id } = useParams();
  const navigate = useNavigate();

  // form states
  const [name, setName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [age, setAge] = useState('');
  const [natoinality, setNationality] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [notes, setNotes] = useState('');
  const [gender, setGender] = useState('');

  const [program, setProgram] = useState({});
  const [image, setImage] = useState();
  const [neighborhoodList, setNeighborhoodList] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProgram(id);
    fetchNeighborhoods();
  }, [])

  async function fetchProgram(id) {
    const res = await fetch(`http://localhost:8000/programs/${id}`)
    const data = await res.json();
    setProgram(data.program[0]);
    fetchImage(data.program[0]);
  }

  async function fetchNeighborhoods() {
    const res = await fetch(`http://localhost:8000/neighborhood`)
    const data = await res.json();
    setNeighborhoodList(data.neighborhood);
  }

  async function fetchImage(program) {
    if (program.image === 'logo.svg') return setImage(defaultImage);
    const res = await fetch(`http://localhost:8000/static/${program.image}`);
    console.log('fetching image...')
    const imageBlob = await res.blob();
    const data = URL.createObjectURL(imageBlob);
    setImage(data);
  }

  async function handleSubmit(e) {

    e.preventDefault();
    console.log('submitting form...')

    setLoading(true);

    const res = await fetch(`http://localhost:8000/programs/${id}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        student: {
          id: studentId,
          name: name,
          phone: phoneNumber,
          age: age,
          nationality: natoinality,
          gender: gender,
          notes: notes
        },
        neighborhoodId: neighborhood
      }),
    })

    setLoading(false);
    const data = await res.json();
    console.log(data);

    navigate(`/programs/postregistration`);
  }

  return (
    <div className='flex items-center justify-center gap-8'>

      <Glass className={'bg-white bg-opacity-50'}>

        <form onSubmit={(e) => handleSubmit(e)} dir='rtl'>

          <div className="container text-primary flex flex-col gap-8 p-8">
            <div className='flex w-full items-center justify-between'>
              <h2 className='form-h2 text-right text-neutral'>
                التسجيل في  {program.title}
              </h2>
              <div className="text-sm breadcrumbs text-neutral">
                <ul>
                  <li><Link to='/'>الرئيسية</Link></li>
                  <li><Link to='/programs'>البرامج</Link></li>
                  <li>{program.title}</li>
                </ul>
              </div>

            </div>

            <div className='w-full flex items-center justify-center'>
              <img src={image} alt="program image" className='max-w-xs' />
            </div>

            <div className='text-neutral'>{program.description}</div>

            <div className="content">

              <FormInput inputName='name' label='الاسم' state={name} setState={setName} type='text' placeholder='ادخل اسمك الثلاثي' maxLength={50} />

              <FormInput inputName='id' label='رقم الهوية' state={studentId} setState={setStudentId} type='text' placeholder='ادخل رقم الهوية او الاقامة' maxLength={10} pattern={'^[0-9]{0,10}$'} />

              <FormInput inputName='age' label='العمر' state={age} setState={setAge} type='text' placeholder='ادخل عمرك' maxLength={2} pattern={"^[0-9]{0,2}$"} />

              <FormInput inputName='nationality' label={'الجنسية'} state={natoinality} setState={setNationality} type='text' placeholder='ادخل الجنسية' maxLength={20} />

              <FormInput inputName='phoneNumber' label='رقم الجوال' state={phoneNumber} setState={setPhoneNumber} type='tel' placeholder='ادخل رقم الجوال' maxLength={10} />


              <div className='input-box'>
                <label htmlFor="neighborhood">الحي</label>
                <NeighborhoodSelector list={neighborhoodList} setState={setNeighborhood} />
              </div>

              <div className="input-box">
                <label htmlFor={"notes"}>ملاحظات</label>
                <input
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  type={'text'}
                  placeholder={'هل لديك أي ملاحظات'}
                  name={'notes'} />
              </div>

              <span className="gender-title">الجنس</span>
              <div className="gender-category flex gap-8">
                <div className='flex items-center justify-center'>
                  <input required type="radio" name="gender" value='male' className="radio radio-secondary ml-4" onChange={(e) => setGender(e.target.value)} />
                  <label htmlFor="gender">ذكر</label>
                </div>
                <div className='flex items-center justify-center'>
                  <input required type="radio" name="gender" value='female' className="radio radio-secondary ml-4" onChange={(e) => setGender(e.target.value)} />
                  <label htmlFor="gender">انثى</label>
                </div>
              </div>

            </div>

            <div className="form-alert">
              <div className='flex items-center justify-center gap-4'>
                <label className="label cursor-pointer">
                  <input type="checkbox" className="checkbox checkbox-sm checkbox-secondary -scale-x-100" required />
                </label>
                اتعهد بان جميع البيانات المسجلة صحيحة ، وخاصة بي ، ويحق للنادي استخدام جميع الصور دون طلب الاذن مني
              </div>
            </div>

            <div className="button-container">
              <button type="submit">
                {
                  loading 
                  ? <span>جاري التحميل ...</span>
                  : <span>تسجيل</span>
                }
              </button>
            </div>

          </div>

        </form>
      </Glass>

    </div>
  )
}
