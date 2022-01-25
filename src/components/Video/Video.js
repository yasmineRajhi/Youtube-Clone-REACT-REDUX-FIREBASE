import React from 'react'
import './_video.scss'
function Video({img1,title,channel,view,timelapse}) {
    return (
        <div className='Video__comp'>
            <div className='video__thumbnail'>
                <img src={img1} alt={title}></img>
            </div>
            <div className='details'>
                <img className='channel__avatar__icon' src='https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300' alt='avatar'/>
                <div className="text">
                    <h6>{title}</h6>
                    <p>{channel}</p>
                    <small>{view} • {timelapse}</small>
                </div>
            </div>
         
        </div>
       
    )
}

export default Video