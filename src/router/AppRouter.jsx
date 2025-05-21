import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Registration from '../components/Registration'
import RegForm from '../components/RegForm'
import RegComplete from '../components/RegComplete'

function AppRouter() {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='registration' element={<Registration />} />
                <Route path='regForm' element={<RegForm />} />
                <Route path='regComplete' element={<RegComplete />} />
            </Routes>
        </>
    )
}

export default AppRouter
