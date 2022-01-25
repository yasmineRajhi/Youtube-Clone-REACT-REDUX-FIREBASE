import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import App from './App'
import Login from './components/Pages/Login/Login'
function MainRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<App />} exact />
                <Route path='/login' element={<Login/>} />
                <Route
                    path="*"
                    element={<Navigate to="/" />}
                />
            </Routes>

        </Router>
    )
}

export default MainRouter