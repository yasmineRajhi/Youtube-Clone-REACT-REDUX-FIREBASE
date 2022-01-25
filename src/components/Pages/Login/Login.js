import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../../Redux/Actions/Auth.action';
import './_login.scss'

const Login = () => {

    const dispatch = useDispatch()

    const handleLogin = () => {
        dispatch(login())
    }

  return (
    <div className='login'>
        <div className='login__container'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrmYPl4m2F2vxSikl0bcVkkHeJ_qjK5Rtgpw&usqp=CAU' alt='youtube'/>
            <button onClick={handleLogin} className='login__btn'>Login with Google</button>
            <p className='login__detail'>YouTube Clone built with YouTube API, Firebase, React JS</p>
        </div>
    </div>
);
};

export default Login;
