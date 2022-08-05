import React from 'react'
import './revenue.scss'
import Button from '@mui/material/Button'

const Revenue = () => {
  return (
    <div className='revenue-main'>
        <h1>Revenue</h1>
        <div className="revenue-choose-date">
            <label for="start">Start date:</label>
            <input type="date"
                id="start"
                name="trip-start"
                min="2022-08-06"
                max="2040-12-31">
            </input>
            <label className='end-date-label' for="end">End date:</label>
            <input type="date"
                id="end"
                name="trip-end"
                min="2022-08-06"
                max="2040-12-31">
            </input>
            <Button variant="contained">SUBMIT</Button>
        </div>
        <h1 className='revenue-text-right'>Total Revenue: ₹50,000</h1>
        <div className="revenue-hotel-heading">
            <div>Sl. No.</div>
            <div>Hotel Name</div>
            <div>Revenue</div>
        </div>
        <hr className="revenue-hr" />
        <div className="revenue-hotel">
            <div>1</div>
            <div>The Smocky Shack</div>
            <div>₹5,000</div>
        </div>
        <hr className="revenue-hr" />
        <div className="revenue-hotel">
            <div>2</div>
            <div>Cita Pani</div>
            <div>₹9,000</div>
        </div>
        <hr className="revenue-hr" />
    </div>
  )
}

export default Revenue