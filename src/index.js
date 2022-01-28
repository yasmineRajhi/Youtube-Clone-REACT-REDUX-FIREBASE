import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import './_base.scss'
import MainRouter from './MainRouter';
import { Provider } from 'react-redux';
import store from './Redux/Store';

ReactDOM.render(
  <Provider store={store}>
    <MainRouter>
      <App />
    </MainRouter>
  </Provider>,
  document.getElementById('root')
);