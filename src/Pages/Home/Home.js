import React from 'react'
import Card from './Cards'
import './style.css'
import { HomeData, HomeHero } from '../../Assets/Data'

export default function Home() {
  return (
    <div className='home_container'>
      <div className='home_content'>
        <div className='hero'>
          <div className='hero_content'>
            <p className='hero_title'>{HomeHero.title}</p>
            <p className='hero_subtitle'>{HomeHero.subtitle}</p>
            <div className='hero_btn_container'>
              <button className='hero_btn'>Create an Account</button>
            </div> 
          </div>
        </div>
        <div className='home_cards'>
          {HomeData.map((data,i)=>{
            return <Card key={i} data = {data} />
          })}
        </div>
        <div className='mobile_apps'>
          <p className='mobile_title'>Download Our Mobile App</p>
          <div className='mobile_items'>
            <div className='mobile_text'>
               <img alt='QRCODE' className='qrcode' src={require('../../Assets/scan-me-qr-code/qr-code-21370.png')}/>
              <button className='mobile_btn'>Google Play Store</button>
            </div>
            <div className='mobile_text'>
            <img alt='QRCODE' className='qrcode' src={require('../../Assets/scan-me-qr-code/scan_me_qr_code.jpg')}/>
              <button className='mobile_btn'>Apple Store</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
