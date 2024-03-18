import React from 'react'
import './style.css'


export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer_row'>
            <p className='footer_text'> Copyright &nbsp; &copy; &nbsp; {new Date().getFullYear()} &nbsp; Flexconnect Ltd</p>
            <div className='footer_items'>
              <p className='footer_links'>Home</p>
              <p className='footer_links'>About</p>
              <p className='footer_links'>Contact</p>
              <p className='footer_links'>Terms</p>
            </div>
        </div>
    </div>
  )
} 
