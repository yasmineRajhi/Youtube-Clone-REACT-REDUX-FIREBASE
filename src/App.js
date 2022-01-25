import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';
import Home from './components/Pages/Home/Home';
import './_app.scss'
const App = () => {
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
