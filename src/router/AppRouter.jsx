import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Registration from '../components/Registration'
import RegForm from '../components/RegForm'
import RegComplete from '../components/RegComplete'
import Login from '../components/Login'

function AppRouter() {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='registration' element={<Registration />} />
                <Route path='regForm' element={<RegForm />} />
                <Route path='regComplete' element={<RegComplete />} />
                <Route path='Login' element={<Login />} />
            </Routes>
        </>
    )
}

export default AppRouter
