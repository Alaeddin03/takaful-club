import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "../components/Header/Header"
import LoggedInNav from '../components/Header/LoggedInNav'
import { getItem } from '../helpers/helper'
import MainContainer from '../components/MainContainer'

export default function Staff() {

    const name = getItem('accountName')

    return (
        <div>
            <Header>
                <LoggedInNav name={name} />
            </Header>

            <MainContainer>
                <Outlet />
            </MainContainer>

        </div>
    )
}
