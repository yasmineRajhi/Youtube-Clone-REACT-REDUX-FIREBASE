import { Container,Row,Col } from 'react-bootstrap';
import HeaderAct from './HeaderAct/HeaderAct';
import HeaderImgAct from './HeaderImgAct/HeaderImgAct';
import VideoAct from './VideoAct';
import IconesAct from './Icones/IconesAct';
import {GrNext} from 'react-icons/gr'
import { MdColorize } from 'react-icons/md';
import ParentsAct from './ParentsAct/ParentsAct';
import Header from '../../Header/Header'
function Actualite() {
  return (<>
  <Header />
    <Container className="App" style={{marginTop:"25px"}}>
          <Row>
            
            <Col>
            <HeaderAct />
            </Col>
          </Row>
          <Row>
            <HeaderImgAct  />
          </Row>
          <Row >
                <div >
            <VideoAct />
                </div>
          </Row>
          <Row>
            <hr style={{marginTop:"-650px"}}></hr>
          </Row>

          <Row>
            <IconesAct style={{marginTop:"-35px",marginLeft:"80px"}} />
            <GrNext style={{marginTop:"-490px",marginLeft:"1100px",backgroundColor:"white",width:"50px",borderRadius:"50px",height:"50px",borderColor:"#909497",cursor:"pointer"}} />
          </Row>
          <Row>
            <hr style={{marginTop:"-300px"}}></hr>
          </Row>
          <Row style={{marginTop:'-330px'}}>
              <ParentsAct RubName='Latest of Jazz Music'/>
          </Row>
          <Row style={{marginTop:'-700px'}}>
              <ParentsAct RubName='React Programming'/>
          </Row>
    </Container>
    </>
  );
}

export default Actualite;
