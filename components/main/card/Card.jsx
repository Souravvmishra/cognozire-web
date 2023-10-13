import React from 'react'
import './card.css'
import { AiFillRightCircle } from 'react-icons/ai'

const Card = ({ service }) => {
  return (
    <div>
      <div className="card ">
        <div className="icon">
          {service.icon}
        </div>
        <strong>
          {service.title}
        </strong>
        <div className="card__body">
          <AiFillRightCircle color='#5252D4' size={40} />
        </div>
        <span>{service.desc}</span>
      </div>
    </div>
  )
}

export default Card
