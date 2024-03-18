import React from 'react'
import Cards from './Cards'
import { HeroData, ServiceData } from '../../Data'


export default function Service() {
  return (
    <div className='container'>
      <div className='content'>
        <div className='hero'>
            <div className='hero_content'>
                <p className='hero_title'>{HeroData.title}</p>
                <p className='hero_text'>{HeroData.subtitle}</p>
            </div>
        </div>
        <div className='card_container'>
          {ServiceData.map((data,id)=>{
              return <Cards data = {data} key={id} />
            //return <img alt ='hero' src={require(`../../Assets/logos/${data.image}`)} />
          })}
        </div>
      </div>
    </div>
  )
}
