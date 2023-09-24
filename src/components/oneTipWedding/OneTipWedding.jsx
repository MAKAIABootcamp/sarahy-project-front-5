import React from 'react'
import './oneTipWedding.scss'


const OneTipWedding = ({image}) => {
  return (
    
    <article className='tipsWeddingCard'>

        <figure className='tipsWeddingCard__number'>
            <img src={image} alt="number" />
        </figure>

        <span className='tipsWeddingCard__info'>

            <span className='tipsWeddingCardTitle'>   
                Planifica todo con tiempo
            </span>

            <p className='tipsWeddingCardText'>
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            </p>

        </span>

    </article>

  )
}

export default OneTipWedding;