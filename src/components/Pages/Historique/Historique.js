import React from 'react'
import './Historique.css'
import HVideo from '../Explore/explore/HVideo/HVideo'
import Left from './Left/Left'
import Community from './Community/Community'
import Right from './Right/Right'
import Header from '../../Header/Header'
function Historique() {
    return (
        <>
        <Header />
        <div className='history'>
            <div className='left'>
                <Left /> 
            </div>
            <div >
                <Right/>
            </div>
        </div>
        </>
    )
}

export default  Historique