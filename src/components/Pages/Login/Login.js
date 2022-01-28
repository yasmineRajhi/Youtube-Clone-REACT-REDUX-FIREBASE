import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../Redux/Actions/Auth.action';
import './_login.scss'

const Login = () => {

    const dispatch = useDispatch()

    const accessToken = useSelector(state=>state.auth.accessToken)
    const handleLogin = () => {
        dispatch(login())
    }

    const Navigate = useNavigate()

    useEffect(()=>{
        if(accessToken){
            Navigate('/');
        }
    },[accessToken,Navigate])

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
