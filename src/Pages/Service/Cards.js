import React from 'react'
//import './style.css'

export default function HomeCards(props) {
  const {data} = props
  return ( 
    <>
      <div className='card'>
          <p className='card_title'>{data.title}</p>
          <div className='card_content'>
              <div className='card_text'>
                  <p className='card_subtitle'>{data.subtitle}</p>
                  <button className='card_btn'>Get Started Now</button>
              </div>
              {/* <div className='card_img'>
                  <img className='card_image' alt={data.title} src={require(`../../Assets/logos/${data.image}`)} />
              </div> */}
          </div>
      </div>
    </>
  )
}
