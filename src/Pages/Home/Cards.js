import React from 'react'
import { StyleRoot } from 'radium';

function Cards(props) {
    const {data} = props
    const flex={
        flexDirection:`${data.column}`,
       '@media (max-width: 800px)':{
        flexDirection:'column-reverse'
       }
    }
   
  return (
    <StyleRoot>
        <div className='home_card' style={{background:`${data.color}`}}>
            <div className='home_card_content' style={flex}>
                <div className='home_card_text'>
                    <p className='home_card_title'>{data.title}</p>
                    <p className='home_card_subtitle'>{data.subtitle}</p>
                </div>
                <img alt={data.title} src={require(`../../Assets/logos/${data.image}`)} className='home_card_img' />
            </div>
        </div>
    </StyleRoot>
  )
}

export default Cards