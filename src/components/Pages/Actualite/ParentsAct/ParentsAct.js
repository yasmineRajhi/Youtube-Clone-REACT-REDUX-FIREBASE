import React from 'react'
import { Container,Row,Col} from 'react-bootstrap'
import {GrCaretNext} from "react-icons/gr"
import {FcAddImage} from "react-icons/fc"
import {MdVerified} from 'react-icons/md'
import Video from '../../../Video/Video'
function ParentsAct({RubName}) {
    return (
        <div>
            <div style={{backgroundColor:"#F0F3F4",height:"1000px",width:'1550px',marginLeft:"-52px",marginTop:"15px"}}>
        <Container >
        <Row >
            <div style={{marginLeft:"85px"}} >
            <Row style={{display:"flex"}}>
                <p style={{marginTop:"35px",fontSize:"18px",marginLeft:"5px",color:"#797D7F",cursor:"pointer"}}><b>{RubName}</b></p>
                <GrCaretNext style={{marginLeft:"-400px",fontSize:"20px",color:"#CACFD2",marginTop:"-38px",cursor:"pointer"}}/>
                <p style={{marginLeft:"300px",marginTop:"-42px",cursor:"pointer"}}>TOUT REGARDER</p>

                </Row>
            </div>
        </Row>
            <div style={{marginLeft:"-210px"}}>
            <Row style={{marginLeft:"265px",marginTop:"18px",flexWrap:"wrap",display:"flex"}}>
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
            </div>
            
        </Container>
        </div>
        </div>
    )
}

export default ParentsAct
