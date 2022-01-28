import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import './_app.scss'
const App = () => {
  const {accessToken,loading} = useSelector(state=>state.auth)
  const Navigate = useNavigate()
  useEffect(()=>{
    if(!loading && !accessToken){
      Navigate('/login')
    }
  },[accessToken,loading,Navigate])
  return (
    <>
      <Header/> 
      <Container fluid className='app__main'>
        <Home/>
      </Container>
    </>
  );
};

export default App;
