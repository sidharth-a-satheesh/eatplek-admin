import React from 'react'
import hotel_img from '../../assets/hotel.png'

const DashHotels = () => {
  return (
    <div className='dash-hotel-main'>
      <img className='dash-hotel-img' src={hotel_img} alt="" />
      <div className='dash-hotel-bottom-div'>
        <div className='dash-hotel-name'>
          <h3>The Smocky Shack</h3>
          <p>15 Min</p>
        </div>
        <p>Arabian, Bevrages, Juices</p>
        <p>Chengannur</p>
      </div>
    </div>
  )
}

export default DashHotels