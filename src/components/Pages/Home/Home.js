import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch,useSelector } from 'react-redux';
import { getPopVideos } from '../../../Redux/Actions/Video.action';
import Categories from '../../Categories/Categories';
import HomePageVideo from '../../Video/HomePageVideo';
import './_home.scss'
const Home = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getPopVideos())
    },[dispatch])

    const {videos} = useSelector(state=>state.homeVideos)
    return (
        <>
            <Container>
                <Categories />
                <Row>
                    {
                        videos.map((video) => (
                            <Col key={video.id} lg={3} md={4}>
                                <HomePageVideo video={video}/>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </>
    );
};

export default Home;
