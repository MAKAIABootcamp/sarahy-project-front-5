import React from 'react'
import './oneServices.scss'

const OneService = ({image, title, text}) => {
  return (
    <article className='oneService'>

        <figure>
            <img src={image} alt={title} />
            <span>{title}</span>
            <p>{text}</p>
        </figure>

    </article>
  )
}

export default OneService