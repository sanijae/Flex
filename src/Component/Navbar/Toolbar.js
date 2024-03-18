import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import useMediaQuery from '@mui/material/useMediaQuery';
import { MdMenu } from "react-icons/md";
import './style.css'


export default function Toolbar() {
    const user = JSON.parse(localStorage.getItem('flex-uid'))
    const [showMenu,setShowMenu] = useState(false)
    const matches = useMediaQuery("(min-width: 1150px)")
    const navigate = useNavigate()

    const toggleMenu =()=> setShowMenu(!showMenu)
    function handleAuth(){
        setShowMenu(false)
        if(user){
            navigate('/user-accounts')
        }
        else{
            navigate('/authentication')
        }
    }
    function navigates(url){
        setShowMenu(false)
        return navigate(url)
    }
  return (
    <>
        <div className='toolbar'>
            <div className='navbar'>
                <div className='brand_container'>
                    <div className='brands'>
                        <p className='brand_title'  onClick={()=>navigate('/')}>Flexconnect</p>
                        <p className='brand_text'>Complete Digital Services</p>
                    </div> 
                </div>
                <div className= {`nav_items_container ${showMenu && 'active'}`}>
                    <nav onClick={()=>navigates('/')} className='nav_items'>Home</nav>
                    <nav onClick={()=>navigates('/airtime-recharge')} className='nav_items'>Voice</nav>
                    <nav onClick={()=>navigates('/data-subscriptions')} className='nav_items'>Data</nav>
                    <nav onClick={()=>navigates('/bills-payments')} className='nav_items'>Bills</nav>
                    <nav onClick={()=>navigates('/e-pins')} className='nav_items'>E-pins</nav>
                    <nav onClick={()=>navigates('/cable-tv-subscriptions')} className='nav_items'>Cable TV</nav>
                    <nav onClick={()=>navigates('/wallet')} className='nav_items'>Wallet</nav>
                    {!matches &&
                    <>
                        {!user ? <nav className='nav_items' onClick={handleAuth}>Login </nav>
                        : <nav className='nav_items' onClick={handleAuth}>Account </nav>}
                    </>
                    }
                </div>
                {matches ?
                <div className='nav_auth'>
                    {!user ? <button className='nav_btn' onClick={handleAuth}>Login </button>
                    : <img className='nav_avatar' alt='Avatar' src={require('../../Assets/logos/6617.jpg')} />}
                </div>
                :
                <div className='nav_auth' onClick={toggleMenu}> <MdMenu className='nav_auth_items' /> </div>
                }
            </div>
        </div>
    </>
  )
}
