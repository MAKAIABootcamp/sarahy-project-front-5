import { useNavigate } from 'react-router-dom'
import React from 'react'
import './cardEventSocial.scss'
const CardEventSocial = ({imageIcon, image, name, text, ruta}) => {
  const navigate = useNavigate()
  const navigateEvent = (ruta) => {
    navigate(ruta)
  }
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

            <span className='detailEventSocial' onClick={() => navigate(ruta)}>
                Detalles
            </span>
        

    </article>


  )
}

export default CardEventSocial