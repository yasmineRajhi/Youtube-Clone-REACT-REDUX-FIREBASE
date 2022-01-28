import {Container, Row,Col} from 'react-bootstrap';
import HeaderExplore from './explore/HeaderExplore';
import VideoExplore from './explore/VideoExplore';
import HVideo from './explore/HVideo/HVideo';
import {AiFillYoutube} from 'react-icons/ai'
import Header from '../../Header/Header'
function Explore() {
  return (
      <>
    <Header/>
    <Container style={{backgroundColor:"#F7F9F9",marginLeft:"141px"}}>
    <Row>
        <HeaderExplore />
      </Row>
      
      <Row style={{marginTop:"55px",marginLeft:"-50px"}}>
      <VideoExplore />

    </Row>
    <hr style={{marginLeft:"100px",marginLeft:"234px",width:"925px",color:"#909497 ",marginTop:"-10px"}}></hr>
    <Row style={{marginLeft:"-50px"}}> 
      <VideoExplore style={{marginTop:"5px"}} />
    </Row>
    <hr style={{marginLeft:"100px",marginLeft:"234px",width:"925px",color:"#909497 ",marginTop:"-9px"}}></hr>
  
    <Row style={{marginLeft:"-380px"}}>  <p>Vidéo Tendance </p> </Row>
  
    <Row style={{marginLeft:"170px",marginTop:"5px"}}>
    <Col style={{marginRight:'-15px'}}>
    <HVideo image='https://i.ytimg.com/vi/5R9jFHlG6ik/maxresdefault.jpg' title='SideBar Menu Tutorial React JS - Beginner Navigation Tutorial' channel='PedroTech' views='63K views' timelapse='1 month ago' description='In this video I will show you guys how to make a responsive Sidebar In React Js. I showed you guys how I do this in an old video, but I...'/>
            </Col>

            <Col style={{marginRight:'-15px'}}>
    <HVideo image='https://i.ytimg.com/vi/5R9jFHlG6ik/maxresdefault.jpg' title='SideBar Menu Tutorial React JS - Beginner Navigation Tutorial' channel='PedroTech' views='63K views' timelapse='1 month ago' description='In this video I will show you guys how to make a responsive Sidebar In React Js. I showed you guys how I do this in an old video, but I...'/>
            </Col>



     <Col style={{marginRight:'-15px'}}>
    <HVideo image='https://i.ytimg.com/vi/5R9jFHlG6ik/maxresdefault.jpg' title='SideBar Menu Tutorial React JS - Beginner Navigation Tutorial' channel='PedroTech' views='63K views' timelapse='1 month ago' description='In this video I will show you guys how to make a responsive Sidebar In React Js. I showed you guys how I do this in an old video, but I...'/>
            </Col>

    



    </Row>
    </Container>
    </>
  );
}

export default Explore;
