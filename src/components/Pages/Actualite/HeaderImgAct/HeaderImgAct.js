import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
import "./HeaderImgAct.css"

function HeaderImgAct() {
    return (
        <Container>
          <Row>
             <Col style={{display:"flex"}}> 
            <img className="imgActualite" src="https://yt3.ggpht.com/R71nRxVlLnQs7DnQICeIzoaNrpDXxmhjq2ULvHSNeStICjFD5ygqyFvKxKyUivjah6rUlAFWlQY=s88-c-k-c0x00ffffff-no-rj"/>
                            <h3 className="ActVid" style={{marginTop:"30px",cursor:"pointer"}}>Actualités</h3>
                            <small className="smallActualite">35.8 M d'abonnées</small>     
             </Col> 
             <Col>
             <Button style={{backgroundColor:'#C0392B ',color:"white",height:"28px",borderColor:'red',marginLeft:"600px",marginTop:'20px',width:"75px",fontSize:"11px"}}>S'abonner</Button>
             
             </Col>               
           </Row>                        
        </Container>
    )
}

export default HeaderImgAct


