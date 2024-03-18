import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN_USER, REGISTER_USER, ERROR} from '../../API/types';

export default function Auths(){
  const [users,setUser] = useState({name:'',email:'',phone:'',password:'',cPassword:''})
  const [signValue,setSignValue] = useState('')
  const {error} = useSelector(state=>state.users)
  const [isSign,setIsSign] = useState(true)
  //const [errors,setError] = useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate()

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  
  
  function isValidPhone(phone){
    return /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(phone);
  }
  
    const handleChange = event => {
      if (!(isValidEmail(event.target.value)) || !(isValidPhone(event.target.value))) {
        dispatch({type: ERROR,payload: 'Invalid Email or phone number'});
      } else {
            dispatch({type: ERROR,payload: ''});
            if(isValidEmail()){
                setUser({email:event.target.value});
            }
            else{
                setUser({phone:event.target.value});
            }
      }
    }
  const submits = async(e) =>{
    e.preventDefault()
    //setError('')
    try {
        if(isSign){
            //dispatch({type:LOGIN_USER,payload:loginUser({...users})})
            //setError('')
            const res = await axios.post('http://localhost:4000/api/login', {signValue,password:users.password})
            if(res.data.data) {
                // Dispatch action after successful login
                // setError('')
                dispatch({type: LOGIN_USER,payload: res.data.data});
                localStorage.setItem('flex-uid',JSON.stringify(res.data.data))
                navigate('/user-accounts')
                console.log(res.data.data)
            }
            else{
                dispatch({type: ERROR,payload: res.data.error});
                //setError(res.data.error)
                //console.error(res.data.error);
            }
        }
        else{
            if(users.password === users.cPassword){
            const res = await axios.post('http://localhost:4000/api/register', {...users})
            if(res.data.data) {
                // Dispatch action after successful login
                dispatch({type: REGISTER_USER,payload: res.data.data});
                localStorage.setItem('flex-uid',JSON.stringify(res.data.data))
                navigate('/user-accounts')
            }
            else{
                // Handle login error
                dispatch({type: ERROR,payload: res.data.error});
                // setError(res.data.error);
            }
            }else{
                dispatch({type: ERROR,payload: 'Oops, Password mismatch'});
            }
        }
    } catch (error) {
        console.log(error.message)
        dispatch({type:ERROR,payload:error.message})
    }
  }

  return (
    <div className='auth_container'>
        <div className='auth_content'>
            <form className='auth_card' onSubmit={submits}>
                <div className='auth_card_group'>
                  {isSign ?  <p className='auth_card_title'>Welcome Back, Login</p> :  <p className='auth_card_title'>Create your account</p>}
                </div>
                {!isSign && <>
                    <div className='auth_card_group'>
                        <p className='auth_card_label'>Full name</p>
                        <input placeholder='Enter your Name' required type='text'
                        onChange={(e)=>setUser({...users,name:e.target.value})} 
                        className='auth_card_input' /> 
                    </div>
                    <div className='auth_card_group'>
                        <p className='auth_card_label'>Email</p>
                        <input placeholder='Enter your email' required type='email'
                        onChange={(e)=>setUser({...users,email:e.target.value})} 
                        className='auth_card_input' />
                    </div>
                </>}
               {!isSign && <div className='auth_card_group'>
                    <p className='auth_card_label'>Phone number</p>
                    <input placeholder={isSign ? 'Email or Phone number' : 'Enter Phone number'} required type='tel'
                     onChange={(e)=>setUser({...users, phone:e.target.value})} 
                     className='auth_card_input' />
                </div>}
                {isSign && <div className='auth_card_group'>
                    <p className='auth_card_label'>Email/Phone number</p>
                    <input placeholder='Email or Phone number' required
                     onChange={handleChange} 
                     className='auth_card_input' />
                </div>}
                <div className='auth_card_group'>
                    <p className='auth_card_label'>Password</p>
                    <input placeholder='Enter password' required type='password'
                     onChange={(e)=>setUser({...users,password:e.target.value})}
                     className='auth_card_input' />
                     {isSign && <p className='forget_password' onClick={()=>navigate('/update-your-password')}>Forgot password</p>}
                </div>
                {!isSign &&
                    <div className='auth_card_group'>
                        <p className='auth_card_label'>Repeat Password</p>
                        <input placeholder='Confirm password' required type='password'
                            onChange={(e)=>setUser({...users,cassword:e.target.value})}
                            className='auth_card_input' />
                    </div>
                }
                {error && 
                    <div className='auth_card_group'>
                        <p className='auth_card_error'>{error}</p>
                    </div>
                }
                {isSign ? 
                    <div className='auth_card_group'>
                        <button type='submit' className='auth_card_btn'>Login</button>
                        <p style={{background:'transparent',padding:'10px',margin:'10px auto'}}>
                        Don't have an account <span onClick={()=>setIsSign(!isSign)} style={{cursor:'pointer',color:'rgb(106, 0, 255)', background:'transparent',fontWeight:'bold'}}>Create one</span> here</p>
                    </div>
                    :
                    <div className='auth_card_group'>
                        <button type='submit' className='auth_card_btn'>Register</button>
                        <p style={{background:'transparent',padding:'10px',margin:'10px auto'}}>
                        Already have an account <span onClick={()=>setIsSign(!isSign)} style={{cursor:'pointer',color:'rgb(106, 0, 255)', background:'transparent',fontWeight:'bold'}}>Login</span> here</p>
                    </div>
                }
            </form>
        </div>
    </div>
  );
};
