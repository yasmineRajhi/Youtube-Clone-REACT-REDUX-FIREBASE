import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import App from './App'
import Login from './components/Pages/Login/Login'
import Explore from './components/Pages/Explore/Explore'
import Historique from "./components/Pages/Historique/Historique"
import Actualite from './components/Pages/Actualite/Actualite'
import Watch from './components/Watch/Watch'
import SearchPage from './components/Pages/SearchPage/SearchPage'
function MainRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<App />} exact />
                <Route path='/login' element={<Login/>} />
                <Route path="/explore" element={<Explore />} exact />
                <Route path="/Historique" element ={<Historique />} exact />
                <Route path="/Actualite" element ={<Actualite />} exact />
                <Route path='/watch/:id' element={<Watch/>} exact/>
                <Route path='/search/:query' element={<SearchPage />} exact/>
                   

                <Route
                    path="*"
                    element={<Navigate to="/" />}
                />
                
            </Routes>

        </Router>
    )
}

export default MainRouter