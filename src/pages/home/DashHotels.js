import React from 'react'
import hotel_img from '../../assets/hotel.png'


const DashHotels = ({name,foodType,location}) => {
  return (
    <div className='dash-hotel-main'>
      <img className='dash-hotel-img' src={hotel_img} alt="" />
      <div className='dash-hotel-bottom-div'>
        <div className='dash-hotel-name'>
          <h3>{name}</h3>
        </div>
        <p>{foodType}</p>
        <p>{location}</p>
      </div>
      
    </div>
  )
}
export default DashHotels