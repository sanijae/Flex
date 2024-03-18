import React ,{useState} from 'react'
import { AvatarModal, EmailModal, CardsModal, PasswordModal } from './Modal'

export default function UserCard() {
  const [avatarModal,setAvatar] = useState(false)
  const [emailModal,setEmail] = useState(false)
  const [passwordModal,setPassword] = useState(false)
  const [cardsModal,setCards] = useState(false)

  return (
    <>
      <div className='user_card'>
          <div className='user_card_header'>
            <img alt='Avatar' src={require('../../Assets/logos/3885.jpg')} className='user_avatar' />
            <button onClick={()=>setAvatar(true)} className='user_btn'>Update Picture</button>
          </div>
          <div className='user_card_body'>
            <p className='user_card_subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien velit, aliquet eget commodo nec, auctor a sapien. Nam eu neque vulputate diam rhoncus faucibus. Curabitur quis varius libero. Lorem.
            </p>
          </div>
      </div>
      <div className='user_card'>
          <div className='user_card_header'>
             <p className='user_card_title'> Email</p>
            <button onClick={()=>setEmail(true)}className='user_btn'>Update</button>
          </div>
          <div className='user_card_body'>
            <p className='user_card_subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien velit, aliquet eget commodo nec, auctor a sapien. Nam eu neque vulputate diam rhoncus faucibus. Curabitur quis varius libero. Lorem.
            </p>
          </div>
      </div>
      <div className='user_card'>
          <div className='user_card_header'>
             <p className='user_card_title'> Password </p>
            <button onClick={()=>setPassword(true)}className='user_btn'>Update</button>
          </div>
          <div className='user_card_body'>
            <p className='user_card_subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien velit, aliquet eget commodo nec, auctor a sapien. Nam eu neque vulputate diam rhoncus faucibus. Curabitur quis varius libero. Lorem.
            </p>
          </div>
      </div>
      <div className='user_card'>
          <div className='user_card_header'>
             <p className='user_card_title'> Cards</p>
            <button onClick={()=>setCards(true)} className='user_btn'>Update</button>
          </div>
          <div className='user_card_body'>
            <p className='user_card_subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien velit, aliquet eget commodo nec, auctor a sapien. Nam eu neque vulputate diam rhoncus faucibus. Curabitur quis varius libero. Lorem.
            </p>
          </div>
      </div>
      <AvatarModal avatarModal={avatarModal} setAvatar={setAvatar} />
      <EmailModal emailModal={emailModal} setEmail={setEmail} />
      <PasswordModal passwordModal={passwordModal} setPassword={setPassword} />
      <CardsModal cardModal={cardsModal} setCards={setCards} />
    </>
  )
}
