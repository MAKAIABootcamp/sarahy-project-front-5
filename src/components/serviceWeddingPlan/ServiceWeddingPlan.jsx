import React from 'react'
import './serviceWeddingPlan.scss'


const ServiceWeddingPlan = ({image, text}) => {
  return (
    <span className='oneServiceWeddingPlan'>
        <figure className='oneServiceWeddingPlan__figure'>
            <img className='oneServiceWeddingPlanImg' src= {image} alt="Logo del Servicio" />
        </figure>

        <p className='oneServiceWeddingPlan__text'>{text}</p>
    </span>
  )
}

export default ServiceWeddingPlan;