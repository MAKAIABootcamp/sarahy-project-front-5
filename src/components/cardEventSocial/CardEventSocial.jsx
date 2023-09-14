import React from 'react'

const CardEventSocial = () => {
  return (

    <article className='cardEventSocial'>

        
            <span className='infoCardSocial'>
                <figure>
                    <img src={imageIcon} alt={name} />
                </figure>
                <span>{name}</span>
            </span>
            <figure className='figureEventSocial'>
                <img src={image} alt={name}/>
            </figure>

            <p className='textEventSocial'>{text}</p>

            <span className='detailEventSocial'>
                Detalles
            </span>
        

    </article>


  )
}

export default CardEventSocial