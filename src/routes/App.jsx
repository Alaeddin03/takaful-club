import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "../components/Header/Header"
import Navigation from "../components/Header/Navigation"
import MainContainer from '../components/MainContainer'


export default function App() {

    return (
        <div>
            <div className='min-h-screen bg-base-100'>

                <Header>
                    <Navigation />
                </Header>

                <MainContainer>
                    <Outlet />
                </MainContainer>

            </div>
        </div>
    )
}