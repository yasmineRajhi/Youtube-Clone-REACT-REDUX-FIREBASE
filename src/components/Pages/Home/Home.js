import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Categories from '../../Categories/Categories';
import Header from '../../Header/Header';
import Video from '../../Video/Video';
import './_home.scss'
const Home = () => {
    return (
        <>
            <Container>
                <Categories />
                <Row>
                    {
                        [...new Array(20)].map(() => (
                            <Col lg={3} md={4}>
                                <Video img1="https://i.ytimg.com/vi/jKKrfr4To14/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC458AGy2eX5BLF4gWbQQ_4UsxL4w" title="Stephanie Beatriz - Waiting On A Miracle (From Encanto)
" channel="DisneyMusicVEVO" view="724k views" timelapse="11 hours ago"/>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </>
    );
};

export default Home;
