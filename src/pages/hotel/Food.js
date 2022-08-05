import React from 'react'
import './food.scss'
import image from '../../assets/food.png'
const Food = ({name,cost,description,imgPath}) => {
  return (
    <div className='food-details-main'>
        <img src={image} alt="" />
        <h2>{name}</h2>
        <h2 style={{color: "navy"}}>Rs. {cost}</h2>
        <p>{description}</p>
    </div>
  )
}

export default Food