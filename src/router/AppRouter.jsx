import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Registration from '../components/Registration'
import RegForm from '../components/RegForm'

function AppRouter() {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='registration' element={<Registration />} />
                <Route path='regForm' element={<RegForm />} />
            </Routes>
        </>
    )
}

export default AppRouter
