import employee_icon from "../assets/employee-icon.svg"
import student_icon from "../assets/student-icon.svg"
import CenterMainContainer from "../components/CenterMainContainer"
import LandingOptions from "../components/Landing/LandingOptions"

function Landing() {
  return (
    <>
      <CenterMainContainer>
        <div className='flex items-center justify-center w-full h-full gap-[10vw] max-md:flex-col max-md:gap-16' dir="rtl">
          <LandingOptions href="/login" icon={employee_icon} title="دخول الموظفين" />
          <LandingOptions href="/programs" icon={student_icon} title="دخول الطلاب" />
        </div>
      </CenterMainContainer>
    </>
  )
}

export default Landing
