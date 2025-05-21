import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Registration from '../components/Registration'

function AppRouter() {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='registration' element={<Registration />} />
            </Routes>
        </>
    )
}

export default AppRouter
