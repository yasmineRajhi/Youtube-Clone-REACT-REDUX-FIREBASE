import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideoById, getRelatedVideos } from "../../Redux/Actions/Video.action";
import Comments from "../Comments/Comments";
import Header from "../Header/Header";
import { VideoData } from "../VideoData/VideoData";
import VideoHorizontal from "../VideoHorizontal/VideoHorizontal";
import "./_watch.scss";
const Watch = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoById(id))
    dispatch(getRelatedVideos(id))
  }, [dispatch, id]);

  const { video, loading } = useSelector((state) => state.selectedVideo);

  const { videos, loading: relatedVideosLoading } = useSelector(state => state.relatedVideos)
  return (
    <>
      <Header />
      <Row className="p-5">
        <Col lg={8}>
          <div className="player">
            <iframe
              src={`https://www.youtube.com/embed/${id}`}
              title={video?.snippet.title}
              allowFullScreen
              width="100%"
              height="100%"
              frameBorder="0"
            ></iframe>
          </div>
          {!loading ? (
            <VideoData video={video} videoId={id} />
          ) : (
            <h6>loading ... </h6>
          )}

          <Comments
            videoId={id}
            totalComments={video?.statistics?.commentCount}
          />
        </Col>
        <Col lg={4}>
          {
            videos
            ?.filter((video) => video.snippet)
              .map((video) => (
                <VideoHorizontal video={video} key={video.id.videoId} />

              ))}
          
        </Col>
      </Row>
    </>
  );
};

export default Watch;
