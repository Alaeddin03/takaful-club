import React, { useEffect, useRef, useState } from 'react'
import Glass from '../components/Glass'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function ProgramForm() {

  const { id } = useParams();
  const navigate = useNavigate();

  const nameRef = useRef();
  const idRef = useRef();
  const ageRef = useRef();
  const nationalityRef = useRef();
  const phoneNumberRef = useRef();
  const neighborhoodRef = useRef();
  const notesRef = useRef();
  const genderRef = useRef();




  const [program, setProgram] = useState({});
  const [image, setImage] = useState();

  useEffect(() => {
    fetchProgram(id);
  }, [])

  async function fetchProgram(id) {
    const res = await fetch(`http://localhost:8000/programs/${id}`)
    const data = await res.json();
    setProgram(data.program[0]);
    fetchImage(data.program[0]);
  }

  async function fetchImage(program) {
    const res = await fetch(`http://localhost:8000/static/${program.image}`);
    const imageBlob = await res.blob();
    const data = URL.createObjectURL(imageBlob);
    setImage(data);
  }

  function handleSubmit(e) {
    e.preventDefault();

    navigate(`/programs/postregistration`);
  }

  return (
    <div className='flex items-center justify-center gap-8'>

      <Glass className={'bg-white bg-opacity-50'}>

        <form onSubmit={(e) => handleSubmit(e)} dir='rtl'>

          <div className="container text-primary flex flex-col gap-8">
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
              <div className="input-box">
                <label htmlFor="name">الاسم</label>
                <input type="text" placeholder="ادخل اسمك الثلاثي" name="name" required />
              </div>
              <div className="input-box">
                <label htmlFor="usernameUsername">رقم الهوية</label>
                <input type="text" placeholder="ادخل رقم الهوية او الاقامة" name="uname" required />
              </div>
              <div className="input-box">
                <label htmlFor="phonenumber">العمر</label>
                <input type="tel" placeholder="ادخل عمرك" name="phoneNumber" required />
              </div>
              <div className="input-box">
                <label htmlFor="email">الجنسية</label>
                <input type="email" placeholder="ادخل الجنسية" name="email" required />
              </div>
              <div className="input-box">
                <label htmlFor="phonenumber">رقم الجوال</label>
                <input type="tel" placeholder="ادخل رقم الجوال" name="phoneNumber" required />
              </div>
              <div className="input-box">
                <label htmlFor="email">الحي</label>
                <input type="email" placeholder="ادخل الحي" name="email" required />
              </div>
              <div className="input-box">
                <label htmlFor="email">المرحلة الدراسية</label>
                <input type="email" placeholder="ادخل المرحلة الدراسية" name="email" required />
              </div>
              <div className="input-box">
                <label htmlFor="email">ملاحظات</label>
                <input type="email" placeholder="هل لديك اي ملاحظات" name="email" required />
              </div>
              <span className="gender-title">الجنس</span>
              <div className="gender-category">
                <input type="radio" name="gender" id="male" className='ml-4' required />
                <label htmlFor="gender" className='ml-8'>ذكر</label>
                <input type="radio" name="gender" id="female" className='ml-4' />
                <label htmlFor="gender" className='ml-8'>انثى</label>
              </div>
            </div>
            <div className="form-alert">
              <div className='flex items-center justify-center gap-4'>
                <input type="checkbox" required />
                اتعهد بان جميع البيانات المسجلة صحيحة ، وخاصة بي ، ويحق للنادي استخدام جميع الصور دون طلب الاذن مني
              </div>
            </div>
            <div className="button-container">
              <button type="submit">تسجيل</button>
            </div>
          </div>
        </form>
      </Glass>

    </div>
  )
}
