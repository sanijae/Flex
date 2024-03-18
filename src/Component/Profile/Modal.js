import React from 'react'
import './modal.css'
import Modal from '@mui/material/Modal';

const style = {
  display:"flex",
  justifyContent:'center',
  alignItems:'center',
  flexDirection:'column',
}

export function AvatarModal(props) {
  const {setAvatar,avatarModal} = props
  const handleClose = () => setAvatar(false);

  return (
    <Modal className='modal' open={avatarModal} onClose={handleClose}>
        <div className='modal_content'>
          <div className='modal_title'>Update Your Profile picture</div>
          <div className='modal_body'>
            <form className='modal_card' style={style}>
              <div className='modal_card_group'>
                <img className='modal_avatar' alt='select pictures' src='' />
              </div>
              <div className='modal_card_group'>
                <label className='modal_label'>Select Image</label>
                <input type='file' className='modal_input' />
              </div>
            </form>
          </div>
          <div className='modal_footer'>
            <button className='modal_btn' onClick={()=>setAvatar(!avatarModal)}>Cancel</button>
            <button className='modal_btn' onClick={()=>setAvatar(!avatarModal)}>Update</button>
          </div>
        </div>
    </Modal>
  )
}


export function EmailModal(props) {
  const {setEmail,emailModal} = props
  const handleClose = () => setEmail(false);

  return (
    <Modal className='modal' open={emailModal} onClose={handleClose}>
        <div className='modal_content'>
          <div className='modal_title'>Email update</div>
          <div className='modal_body'>
            <form className='modal_card'>
              <div className='modal_card_group'>
                <label className='modal_label'>Email</label>
                <input type='email' placeholder='Email' className='modal_input' />
              </div>
            </form>
          </div>
          <div className='modal_footer'>
            <button className='modal_btn' onClick={()=>setEmail(!emailModal)}>Cancel</button>
            <button className='modal_btn' onClick={()=>setEmail(!emailModal)}>Update</button>
          </div>
        </div>
    </Modal>
  )
}

export function PasswordModal(props) {
  const {setPassword,passwordModal} = props
  const handleClose = () => setPassword(false);

  return (
    <Modal className='modal' open={passwordModal} onClose={handleClose}>
        <div className='modal_content'>
          <div className='modal_title'>Update your password</div>
          <div className='modal_body'>
            <form className='modal_card'>
              <div className='modal_card_group'>
                <label className='modal_label'>Password</label>
                <input type='password' className='modal_input' />
              </div>
              <div className='modal_card_group'>
                <label className='modal_label'>Repeat Password</label>
                <input type='password' className='modal_input' />
              </div>
            </form>
          </div>
          <div className='modal_footer'>
            <button className='modal_btn' onClick={()=>setPassword(!passwordModal)}>Cancel</button>
            <button className='modal_btn' onClick={()=>setPassword(!passwordModal)}>Update</button>
          </div>
        </div>
    </Modal>
  )
}


export function CardsModal(props) {
  const {setCards,cardModal} = props
  const handleClose = () => setCards(false);

  return (
    <Modal className='modal' open={cardModal} onClose={handleClose}>
        <div className='modal_content'>
          <div className='modal_title'>Update Your Linked Card</div>
          <div className='modal_body'>
            <form className='modal_card'>
              <div className='modal_card_group'>
                <label className='modal_label'>Select Image</label>
                <input type='file' className='modal_input' />
              </div>
            </form>
          </div>
          <div className='modal_footer'>
            <button className='modal_btn' onClick={()=>setCards(!cardModal)}>Cancel</button>
            <button className='modal_btn' onClick={()=>setCards(!cardModal)}>Update</button>
          </div>
        </div>
    </Modal>
  )
}