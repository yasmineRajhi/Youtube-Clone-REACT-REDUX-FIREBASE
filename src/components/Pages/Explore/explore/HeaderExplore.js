import React from 'react'
import {Container, Row,Col} from 'react-bootstrap';
import {HiOutlineMusicNote} from 'react-icons/hi';
import {SiYoutubegaming} from 'react-icons/si';
import {BsTrophyFill} from 'react-icons/bs';
import {AiFillFire} from 'react-icons/ai';
import Card from './Card/Card';
function HeaderExplore() {
    return (
        <Container style={{marginLeft:"201px",marginTop:"80px",width:'793px'}}>
            <Row  >
                
               <Col >
               <div >
                    <Card className='col_card1' img='https://www.youtube.com/img/explore/destinations/icons/trending_color_64.png' title='Tendances'/>
                    </div>
              </Col>
              
            
               <Col >
               <div style={{marginLeft:"-57px"}}>
                    <Card className='col_card2' img='//youtube.com/img/explore/destinations/icons/music_color_64.png' title='Musique'/>
                    </div>
               </Col>
               <Col >
               <div  style={{marginLeft:"-105px"}}>
                    <Card  img='//youtube.com/img/explore/destinations/icons/gaming_color_64.png' title='Jeux vidéo'/>
                </div>
               </Col>
               <Col >
               <div  style={{marginLeft:"-152px"}}>
                    <Card  img='//youtube.com/img/explore/destinations/icons/sports_color_64.png' title='Sport'/>
                </div>
               </Col>
            </Row>
        </Container>
    )
}

export default HeaderExplore