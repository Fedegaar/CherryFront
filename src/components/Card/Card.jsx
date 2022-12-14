import React from 'react'
import s from './Card.module.css'


const Card = ({name, image, description, presentation, active, price, available}) => {
  return (    
    <div className={s.cardMain}>
      <img src={image} alt="ProdImage" />
      <h3>{name}</h3>      
      <span>{presentation}</span>
      <span>{description}</span>
      <span>{active}</span>
      <span>${price}</span>
    </div>  
  )
}

export default Card
