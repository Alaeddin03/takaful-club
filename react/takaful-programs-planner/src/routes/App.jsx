import { Link } from "react-router-dom"
import Header from "../components/Header"
import Navigation from "../components/Navigation"
import MainContainer from "../components/MainContainer"
import Glass from "../components/Glass"
import employee_icon from "../assets/employee-icon.svg"
import student_icon from "../assets/student-icon.svg"

function App() {
  const f = new Date()
  return (
    <>
      <Header>
        <Navigation />
      </Header>

        <MainContainer className={'h-screen'}>
          <div className='flex items-center justify-center w-full h-full gap-[10vw] max-md:flex-col max-md:gap-16'>
            <Link to="/programs">
              <Glass className={"cursor-pointer transition-transform hover:scale-105"}>
                <div className="py-8 px-8 flex flex-col items-center justify-around gap-8">
                  <img src={student_icon} alt="student icon" className="w-16" />
                  <h2 className='text-center text-4xl text-white'>
                    دخول الطلاب
                  </h2>
                </div>
              </Glass>
            </Link>

            <Link to="/login">
              <Glass className={"cursor-pointer transition-transform hover:scale-105"}>
                <div className="py-8 px-8 flex flex-col items-center justify-around gap-8">
                  <img src={employee_icon} alt="employee icon" className="w-16" />
                  <h2 className='text-center text-4xl text-white'>
                    دخول الموظفين
                  </h2>
                </div>
              </Glass>
            </Link>
          </div>
        </MainContainer>
    </>
  )
}

export default App
