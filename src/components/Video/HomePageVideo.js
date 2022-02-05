import React, { useEffect, useState } from 'react'
import request from '../apis/Yasmine'
import moment from 'moment'
import numeral from 'numeral'
import './_video.scss'
function Video({video}) {
    const {id, snippet:{channelId,channelTitle,title,publishAt,thumbnails:{medium}}} = video
    const [views, setViews] = useState(null);
    const [duration, setDuration] = useState(null);
    const [channelIcon, setChannelIcon] = useState(null);
    const seconds = moment.duration(duration).asSeconds()
    const format_duration = moment.utc(seconds * 1000).format("mm:ss")
    useEffect(()=>{
        const get_vid_details=async ()=>{
            const {data:{ items }} = await request('/videos',{
                params:{
                    part:'contentDetails,statistics',
                    id:id
                }
            })
            setDuration(items[0].contentDetails.duration)
            setViews(items[0].statistics.viewCount)
        }
        get_vid_details()
    },[id])
    useEffect(()=>{
        const get_channel_icon=async ()=>{
            const {data:{ items }} = await request('/channels',{
                params:{
                    part:'snippet',
                    id:channelId
                }
            })
            setChannelIcon(items[0].snippet.thumbnails.default)
        }
        get_channel_icon()
    },[channelId])
    return (
        <div className='Video__comp'>
            <div className='video__thumbnail'>
                <img src={medium.url} alt=""></img>
                <span>{format_duration}</span>
            </div>
            <div className='details'>
                <img className='channel__avatar__icon' src={channelIcon?.url} alt=''/>
                <div className="text">
                    <h6>{title}</h6>
                    <p>{channelTitle}</p>
                    <small>{numeral(views).format("0.a")} • {moment(publishAt).fromNow()}</small>
                </div>
            </div>
         
        </div>
       
    )
}

export default Video