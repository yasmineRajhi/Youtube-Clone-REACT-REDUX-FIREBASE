import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import {FcAddImage} from 'react-icons/fc';
import {FiMoreVertical} from 'react-icons/fi'
import {GoVerified} from 'react-icons/go'
import {AiFillYoutube } from 'react-icons/ai'
import Video from '../../../Video/Video'
function VideoExplore() {
    return (
        <Container>
            <Row  style={{marginTop:"2px"}}>
             
             <p style={{marginLeft:'285px',fontSize:"12px"}}> <AiFillYoutube  style={{color:"red"}}/> <b>Vidéos tendance</b></p>
             <small style={{marginTop:'-13px',marginLeft:"285px",fontSize:"10px"}}>Dérnières tendances</small>
            
         </Row>

         <Row style={{marginLeft:"265px",marginTop:"8px",flexWrap:"wrap",display:"flex"}}>
             <Col style={{marginRight:'-15px'}}>
             <Video img1='https://i.ytimg.com/vi/5vV412eHGHc/maxresdefault.jpg' img2="//yt3.ggpht.com/UiCgbNLn12OTgjcL8Oa10Ig2KTEiZ56f-Ut-_7gcVleZ8P_eukKotZbEsZXGNaU2EKjn0ckF=s176-c-k-c0x00ffffff-no-rj-mo"  title='vintage evening - jazz' channel='cee' view='24M' timelapse='3 months ago'/>
            </Col>
            <Col style={{marginLeft:"-105px", marginRight:'-15px'}}>
             <Video img1='https://i.ytimg.com/vi/5vV412eHGHc/maxresdefault.jpg' img2="//yt3.ggpht.com/UiCgbNLn12OTgjcL8Oa10Ig2KTEiZ56f-Ut-_7gcVleZ8P_eukKotZbEsZXGNaU2EKjn0ckF=s176-c-k-c0x00ffffff-no-rj-mo"  title='vintage evening - jazz' channel='cee' view='24M' timelapse='3 months ago'/>
            </Col>

            <Col style={{marginLeft:"-105px", marginRight:'-30px'}} >
             <Video img1='https://i.ytimg.com/vi/5vV412eHGHc/maxresdefault.jpg' img2="//yt3.ggpht.com/UiCgbNLn12OTgjcL8Oa10Ig2KTEiZ56f-Ut-_7gcVleZ8P_eukKotZbEsZXGNaU2EKjn0ckF=s176-c-k-c0x00ffffff-no-rj-mo"  title='vintage evening - jazz' channel='cee' view='24M' timelapse='3 months ago'/>
            </Col>

          

            


            </Row>
         
        </Container>
    )
}

export default VideoExplore