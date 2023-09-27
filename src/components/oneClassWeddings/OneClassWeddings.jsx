import React from 'react'
import './oneClassWeddings.scss'


const OneClassWeddings = ({image, title}) => {
  return (
    
    <span className='classWeddingCard'>
        <figure className='classWeddingCard__figure'>
            <img className='classWeddingCardImg' src={image} alt={title} />
        </figure>

        <p className='classWeddingCard__title'> 
            {title}
        </p>
    </span>

  )
}

export default OneClassWeddings;