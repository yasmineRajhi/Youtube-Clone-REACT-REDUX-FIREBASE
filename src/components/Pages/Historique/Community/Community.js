import React from 'react'
import {AiOutlineMore} from 'react-icons/ai'
import './Community.css'
function Community({title,act,name,timelapse}) {
    return (
        <div className='community'>
            <h2>{title}</h2>
            <div className='dits'>
                <p>{act} {name}'s <span>post</span></p>
                <AiOutlineMore style={{marginTop:'27px'}}/>
            </div>
            <small>{timelapse}</small>
            
        </div>
    )
}

export default Community