import React from 'react'
import Card from './Card'
import { ServiceData, CardsData } from '../../Assets/Data'
import './style.css'

 
export default function Wallet() {
  return (
    <div className='wallet_container'>
        <div className='wallet_content'>
            <div className='wallet_column'>
                <div className='wallet_balance_container'>
                    <div className='wallet_balance_row'>
                        <div className='wallet_balance_title'>&#8358;00.00</div>
                    </div>
                    <div className='wallet_balance_button'>hide balance</div>
                </div>
                <div className='grid'>
                    {ServiceData.map((data,i)=>{
                        return <Card key={i} data={data} />
                    })}
                </div>
                {CardsData.map((data,i)=>{
                    return (
                        <div key={i} className='wallet_card' style={{width:'90%'}}>
                            <div className='wallet_card_title'>{data.title}</div>
                            <div className='wallet_card_subtitle'>{data.subtitle}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}
