import React from 'react'
import UserCard from './UserCard'
import './style.css'

export default function Profile() {
  return (
    <div className='profile_container'>
        <div className='profile_content'>
            <div className='cards'>
                <UserCard/>
            </div>
        </div>
    </div>
  )
}
