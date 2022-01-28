import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
import "./IconesAct.css"
function IconesAct() {
    return (
        <Container style={{marginTop:"-625px"}}>
            <Row>
                <p style={{marginLeft:"175px"}}><b>Rubriques</b></p>
            </Row>
            <Row>
                <Col>
                <img className="img1VidAct" src="//yt3.ggpht.com/y6WO1gwVaI_Q-80UWMf4rQLIYGsTtzHikIBnwidv82akHfJb-hsWUFhTuYgJX1Cw2gRayUQxN90=s176-c-k-c0x00ffffff-no-rj-mo"/>
                <p style={{marginLeft:"194px",marginBottom:"5px",cursor:"pointer",width:"145px"}}>Actualités sportives</p>
                <small style={{marginLeft:"215px"}}>903K abonnés</small> <br/>
                <Button style={{marginTop:"25px",marginLeft:"196px",borderColor:"#CACFD2  ",backgroundColor:"#CACFD2  ",color:"#839192",cursor:"pointer"}}>S'ABONNER</Button>
                </Col>

                <Col>
                <img className="img2VidAct" src="//yt3.ggpht.com/Q20IMiMMQEfmVmiE-4biK53TLV7awtGeeeM2xSYBgYM_FFOsNOPGokvmAQA1wc_VwRH0FkO8u04=s176-c-k-c0x00ffffff-no-rj-mo"/>
                <p style={{marginBottom:"5px",cursor:"pointer",marginLeft:"0px"}}>Actualités média</p>
                <small style={{marginLeft:"14px"}}>703K abonnés</small> <br/>
                <Button style={{marginTop:"24px",borderColor:"#CACFD2  ",backgroundColor:"#CACFD2  ",color:"#839192",cursor:"pointer"}}>S'ABONNER</Button>
                </Col>
                <Col>
                <img className="img3VidAct" src="//yt3.ggpht.com/adTnMfOWoFt90ES9ST3reMU0MC0UWxntadd1b-8a0zkO1YLxwQXpQpsu7NREsD13Sz7Rn0KF=s176-c-k-c0x00ffffff-no-rj-mo"/>
                <p style={{marginLeft:"-80px",marginBottom:"5px",cursor:"pointer"}}>Actualités financières</p>
                <small style={{marginLeft:"-52px"}}>816K abonnés</small><br/>
                <Button style={{marginTop:"25px",marginLeft:"-64px",borderColor:"#CACFD2  ",backgroundColor:"#CACFD2  ",color:"#839192",cursor:"pointer"}}>S'ABONNER</Button>
                </Col>


                <Col>
                <img className="img4VidAct" src="//yt3.ggpht.com/lRQlgsapZShJ5nqnb8q4HUtKy9HiLNucPxuj-NjoHoR8rXbAG61E2YoG3ONWg-S_FfP08QAr=s176-c-k-c0x00ffffff-no-rj-mo"/>
                <p style={{marginLeft:"-150px",marginBottom:"5px",cursor:"pointer"}}>Actualités technologiques</p>
                <small style={{marginLeft:"-95px"}}>477K abonnés</small><br/>
                <Button style={{marginTop:"20px",marginLeft:"-110px",borderColor:"#CACFD2  ",backgroundColor:"#CACFD2  ",color:"#839192",cursor:"pointer"}}>S'ABONNER</Button>
                </Col>


                <Col>
                <img className="img5VidAct" src="//yt3.ggpht.com/RQTNlkKfJPVahrDKkUF91tUgYAcLIlinnQZ4iVy2_D_0DTw4Uu-t-fAZpAFctbp7sacU6Qienos=s176-c-k-c0x00ffffff-no-rj-mo"/>
                <p style={{marginLeft:"-185px",marginBottom:"5px",cursor:"pointer"}}>Actualités internationales</p>
                <small style={{marginLeft:"-145px"}}>1.32M abonnés</small><br/>
                <Button style={{marginTop:"15px",marginLeft:"-150px",borderColor:"#CACFD2  ",backgroundColor:"#CACFD2  ",color:"#839192",cursor:"pointer"}}>S'ABONNER</Button>
                </Col>

              


            </Row>
            
        </Container>
    )
}

export default IconesAct



