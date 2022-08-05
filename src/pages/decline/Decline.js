import React from 'react'
import './decline.scss'

const Decline = () => {
  return (
    <div className='decline-main'>
        <h1>Declined Requests</h1>
        <div className="declined-heading">
            <div>Sl. No.</div>
            <div className='declined-text-center'>Hotel Name</div>
            <div className='declined-text-center'>Customer Name</div>
            <div className='declined-text-center'>Customer No.</div>
            <div className='declined-text-center'>Order Type</div>
            <div className='declined-text-center'>Time</div>
            <div className='declined-text-right'>Date</div>
        </div>
        <hr className='declined-hr'/>
        <div className="declined-order">
            <div>1</div>
            <div className='declined-text-center'>The Smocky Shack</div>
            <div className='declined-text-center'>Ashkar Ali P K</div>
            <div className='declined-text-center'>9876543210</div>
            <div className='declined-text-center'>Dine In</div>
            <div className='declined-text-center'>2:30</div>
            <div className='declined-text-right'>12/08/2022</div>
        </div>
        <hr className='declined-hr'/>
        <div className="declined-order">
            <div>2</div>
            <div className='declined-text-center'>BullBull Cafe</div>
            <div className='declined-text-center'>Rameez Ali P K</div>
            <div className='declined-text-center'>7894561230</div>
            <div className='declined-text-center'>Take Away</div>
            <div className='declined-text-center'>4:00</div>
            <div className='declined-text-right'>09/07/2022</div>
        </div>
        <hr className='declined-hr'/>
    </div>
  )
}

export default Decline