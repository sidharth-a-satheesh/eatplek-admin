import React from 'react'
import './bill.scss'

const Bill = () => {
  return (
    <div className='bill-bg'>
        <div className="bill-main">
            <div className="bill">
                <div className="bill-top">
                    <div className='bill-top-details'>
                        <div>Bill to:  <span className="bill-bold">Sidharth A</span></div>
                        <div>Phone:  <span className="bill-bold">9876543210</span></div>
                        <div>Order type:  <span className="bill-bold">Dine In</span></div>
                    </div>
                    <div className='bill-top-heading'>
                        INVOICE
                    </div>
                </div>
                <div className="bill-middle-main">
                    <div className='bill-hotel-name'>Ceylon Bake House Marian Drive</div>
                    <div className="bill-hotel-location-number">Chengannur, 9854654213</div>
                    <hr className='bill-dashed-hr' />
                    <div className="bill-middle-sub">
                        <div className='bill-middle-sub-heading'>
                            <div className='bill-item'>Item</div>
                            <div className='bill-text-center'>Unit Price</div>
                            <div className='bill-text-center'>Quantity</div>
                            <div className='bill-total'>Total</div>
                        </div>
                        <hr className='bill-items-hr' />
                        <div className="bill-middle-items">
                            <div className='bill-item'>Zinger Burger</div>
                            <div className='bill-text-center'>179</div>
                            <div className='bill-text-center'>1</div>
                            <div className='bill-total'>179</div>
                        </div>
                        <hr className='bill-items-hr' />
                        <div className="bill-middle-items">
                            <div className='bill-item'>Avacado Nights</div>
                            <div className='bill-text-center'>280</div>
                            <div className='bill-text-center'>2</div>
                            <div className='bill-total'>560</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Bill