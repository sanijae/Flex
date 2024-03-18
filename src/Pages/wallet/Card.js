import React from 'react'

export default function Card({data}) {
  return (
    <div className='wallet_card'>
        <div className='wallet_card_title'>{data.title}</div>
        <div className='wallet_card_subtitle'>{data.subtitle}</div>
    </div>
  )
}
 