import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getPopVideos,
  getVideosByCategory,
} from "../../../Redux/Actions/Video.action";
import Categories from "../../Categories/Categories";
import HomePageVideo from "../../Video/HomePageVideo";
import InfiniteScroll from "react-infinite-scroll-component";
import "./_home.scss";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopVideos());
  }, [dispatch]);

  const { videos, activeCategory } = useSelector((state) => state.homeVideos);
  const fetchData = () => {
    if (activeCategory === "All") dispatch(getPopVideos());
    else {
      dispatch(getVideosByCategory(activeCategory));
    }
  };
  return (
    <>
      <Container>
        <Categories />
        <Row>
          <InfiniteScroll
            dataLength={videos.length}
            next={fetchData}
            hasMore={true}
            loader={
              <div className="spinner-border text-danger d-block mx-auto"></div>
            }
            className="infinite__scroll"
          >
            {videos.map((video) => (
              <Col key={video.id} lg={3} md={4}>
                <HomePageVideo video={video} />
              </Col>
            ))}
          </InfiniteScroll>
        </Row>
      </Container>
    </>
  );
};

export default Home;
