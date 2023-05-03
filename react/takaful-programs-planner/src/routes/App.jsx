import Header from "../components/Header/Header"
import Navigation from "../components/Header/Navigation"
import MainContainer from "../components/MainContainer"
import employee_icon from "../assets/employee-icon.svg"
import student_icon from "../assets/student-icon.svg"
import LandingOptions from "../components/Landing/LandingOptions"

function App() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>

        <MainContainer className={'h-screen'}>
          <div className='flex items-center justify-center w-full h-full gap-[10vw] max-md:flex-col max-md:gap-16' dir="rtl">
            <LandingOptions href="/login" icon={employee_icon} title="دخول الموظفين" />
            <LandingOptions href="/programs" icon={student_icon} title="دخول الطلاب" />
          </div>
        </MainContainer>
    </>
  )
}

export default App
