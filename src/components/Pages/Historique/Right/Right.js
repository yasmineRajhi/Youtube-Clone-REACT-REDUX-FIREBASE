import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import {FaRegTrashAlt} from 'react-icons/fa';
import {AiOutlinePauseCircle} from 'react-icons/ai';
import {FiSettings} from 'react-icons/fi';
import {BsSearch} from 'react-icons/bs'
 
function Right() {
    return (
       <Container style={{marginLeft:'-530px',width:'380px',backgroundColor:'#F2F4F4',height:'1000px',marginTop:'-29px'}}>
           <Row style={{marginLeft:'-21px'}} >
               <Col > 
               <BsSearch style={{fontSize:"10px"}}/><input type='text'  placeholder="Recherche dans l'historique You..." style={{marginTop:'35px',fontSize:"10px",borderRadius:'5px',borderColor:"transparent",borderBottomColor:'black'  ,backgroundColor:'transparent',width:'250px',height:'41px'}} /> 
                 
               </Col>
            </Row>

            <Row style={{marginTop:"6px",marginLeft:'-10px'}}> 
                <Col style={{fontSize:'13px'}}>
                 Type d'historique
                </Col>
            </Row>
             <hr style={{width:'350px',marginLeft:'-5px',marginTop:"11px"}}></hr>
           
           
            <Row style={{marginTop:'-13px',fontSize:"10px",marginBottom:'5px',marginLeft:'-670px',marginLeft:"5px",width:"350px"}}>
                <Col style={{display:'flex', justifyContent:'space-between',marginLeft:"-634px"}}>
                   <div style={{width:'200px'}}>
                          <p style={{width:"150px",marginTop:"5px",marginLeft:"613px"}} >
                           historique de visionnage
                        </p>
                       <div style={{marginTop:"-22px",marginLeft:"940px"}}>
                          <input type="radio"/> 
                       </div>
                    </div>
                </Col>
           </Row>
      
           <hr style={{width:'350px',marginLeft:'-5px',marginTop:"-5px"}}></hr>


            <Row style={{marginTop:'-12px',fontSize:"11px",marginLeft:'-600px'}}>
                <Col style={{display:'flex',marginLeft:"-20px"}}>
                    <p style={{width:"150px",marginTop:"5px",marginLeft:"610px"}}>Communauté</p>  <input type="radio" style={{marginLeft:'254px',marginTop:'12px',fontSize:'30px'}} /> 
                </Col>
            </Row>

            <hr style={{width:'350px',marginLeft:'-5px',marginTop:"-3px"}}></hr>


            <Row style={{marginTop:'10px',marginLeft:'-17px',cursor:'pointer'}}>
                <Col  style={{fontSize:'13px'}}>
                <FaRegTrashAlt style={{marginRight:'8px'}} /> Effacer tout l'historique des vidéos regardées</Col>
            </Row>

            <Row style={{marginLeft:'-17px',marginTop:'10px',cursor:'pointer'}}>
                <Col style={{fontSize:'13px'}}>
                <AiOutlinePauseCircle style={{marginRight:'8px' }}/>  SUSPENDRE L'HISTORIQUE
                </Col>
            </Row>

            <Row style={{marginLeft:'-16px',marginTop:'10px',cursor:'pointer'}}>
                <Col  style={{fontSize:'13px'}}>
                <FiSettings style={{fontSize:'13px',marginRight:'8px'}} /> Gérer tout l'historique
                </Col>
            </Row>
            

       </Container>
    )
}

export default Right