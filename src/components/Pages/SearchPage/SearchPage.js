import React,{useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { getVideosBySearch } from '../../../Redux/Actions/Video.action';
import HomePageVideo from '../../Video/HomePageVideo'
import './SearchPage.css';
import { Container } from 'react-bootstrap';
import Header from '../../Header/Header';
const SearchPage = () => {
    const {query }= useParams()
    console.log(query)
const dispatch = useDispatch()

useEffect (()=>{
dispatch(getVideosBySearch(query))
},[query,dispatch])  

const {videos,loading}= useSelector(state=>state.searchVideos)
  return (
      <>
      
  <Header />

    <Container className="videos_list">
        {
            !loading ? (videos?.map(video =>(
                <HomePageVideo video={video} key={video.id.videoId}/>
                ))
            ) : (
                <h1>loading .... </h1>
            )
        }
       
   </Container>  
   </>
  )
};

export default SearchPage;
