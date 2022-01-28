import React from 'react'
import './Card.css'
function Card({img, title}) {
    return (
        <div className='Card'>
            <img className='Card__icon' src={img} alt='Tendances'/>
            <p className='Card__title'>{title}</p>
        </div>
    )
} 

export default Card
