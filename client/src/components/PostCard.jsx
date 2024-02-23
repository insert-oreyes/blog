import React from 'react'

export default function PostCard({ image, title, author, time, paragraph }) {
  return (
    <div className='post' key={author + time}>
      <div className='image'>
        <img src={image} alt='' />
      </div>
      <div className='texts'>
        <h2>{title}</h2>
        <p className='info'>
          <a href='/' className='author'>
            {author}
          </a>
          <time>{time}</time>
        </p>
        <p className='summary'>{paragraph}</p>
      </div>
    </div>
  )
}
