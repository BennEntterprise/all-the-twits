import React from 'react'
import './TweetCard.css'
interface ITweetCard {
  userId: string
  name: string
  handle: string
  createDate: string
  createTime: number
  body: string
}
const TweetCard = (props: ITweetCard) => {
  return (
    <div className='tweet-card'>
      <div className='tweet-identity'>
        <div className='profile-img'>{props.userId}</div>
        <div className='profile-text'>
          <div className='profile-text-first-row'>
            <div className='profile-text-name'>{props.name}</div>
            <div className='profile-text-handle'>{props.handle}</div>
          </div>
          <div className='profile-text-second-row'>
            <div className='profile-text-date'>{props.createDate}</div>
            <div className='profile-text-time'>{props.createTime}</div>
          </div>
        </div>
      </div>
      <div className='tweet-body'>{props.body}</div>
    </div>
  )
}

export default TweetCard
