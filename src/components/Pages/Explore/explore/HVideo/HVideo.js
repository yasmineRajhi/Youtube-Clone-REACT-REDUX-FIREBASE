import React from 'react'
import './HVideo.css'

function HVideo({image,title,channel,views,timelapse,description}) {
    return (
        <div className='hvideo'>
            <img className="Hvexplore" src={image} alt={title}/>
            <div className='detailsHV'>
                <h2>{title}</h2>
                <p>{channel}.{views}.{timelapse}</p>
                <small>{description}</small>
            </div>
            
        </div>
    )
}

export default HVideo