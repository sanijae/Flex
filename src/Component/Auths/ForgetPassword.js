import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import {updateUser } from '../../API/Actions/User_action';
import { UPDATE_USER, ERROR} from '../../API/types';

export default function ForgotPassword(){
  const [users,setUser] = useState({password:'',Cpassword:''})
  const {error} = useSelector(state=>state.users)
  const dispatch = useDispatch();
  const navigate = useNavigate()

   
  const submits = async(e) =>{
    e.preventDefault()
    try {
        dispatch({type:UPDATE_USER,payload:updateUser({password:users.password},navigate)})
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
                  <p className='auth_card_title'>Update your password</p>
                </div>
                <div className='auth_card_group'>
                    <p className='auth_card_label'>Password</p>
                    <input placeholder='Enter password' required type='password'
                     onChange={(e)=>setUser({...users,password:e.target.value})}
                     className='auth_card_input' />
                </div>
                <div className='auth_card_group'>
                    <p className='auth_card_label'>Repeat Password</p>
                    <input placeholder='Confirm password' required type='password'
                        onChange={(e)=>setUser({...users,password:e.target.value})}
                        className='auth_card_input' />
                </div>
                {error && 
                    <div className='auth_card_group'>
                        <p className='auth_card_error'>{error}</p>
                    </div>
                }
                <button type='submit' className='auth_card_btn'>Login</button>
            </form>
        </div>
    </div>
  );
};
