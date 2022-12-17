import React from 'react'
import s from './Card.module.css'
import { Link } from 'react-router-dom'

const Card = ({name, image, description, presentation, active, price, available, duration, type, id}) => {
  return (    
    <Link to={`/detail/${id}`}>
        <div className={s.cardMain}>
          <img src={image} alt="ProdImage" />
          <h3>{name}</h3>      
          <span>{presentation}</span>
          <span>{description}</span>
          <span>{active}</span>
          <span>${price}</span>
        </div>
    </Link>  
  )
}

export default Card
