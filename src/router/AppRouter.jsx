import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Registration from '../components/Registration'
import RegForm from '../components/RegForm'
import RegComplete from '../components/RegComplete'
import Login from '../components/Login'
import ChooseEvents from '../components/Events/ChooseEvents'
import Event1 from '../components/Events/Event1'
import Event2 from '../components/Events/Event2'
import Event3 from '../components/Events/Event3'

function AppRouter() {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='registration' element={<Registration />} />
                <Route path='regForm' element={<RegForm />} />
                <Route path='regComplete' element={<RegComplete />} />
                <Route path='Login' element={<Login />} />
                <Route path='events' element={<ChooseEvents />} />
                <Route path='event1' element={<Event1 />} />
                <Route path='event2' element={<Event2 />} />
                <Route path='event3' element={<Event3 />} />
            </Routes>
        </>
    )
}

export default AppRouter
