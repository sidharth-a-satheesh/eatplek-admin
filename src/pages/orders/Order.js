import React from 'react'
import './order.scss'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

const Order = () => {
    const navigate = useNavigate();
    const navigateToInvoice = () =>{
        navigate("/invoice");
    }

    return (
        <div className='order-main'>
            <h1>Orders</h1>
            <div className="order-heading">
                <div>Sl. No.</div>
                <div className='order-text-center'>Hotel Name</div>
                <div className='order-text-center'>Customer Name</div>
                <div className='order-text-center'>Invoice</div>
            </div>
            <hr className="order-hr" />
            <div className="order">
                <div>1</div>
                <div className='order-text-center'>The Smoky Shack</div>
                <div className='order-text-center'>Ashkar Ali P K</div>
                <Button onClick={navigateToInvoice} variant="outlined">View Bill</Button>
            </div>
            <hr className="order-hr" />
            <div className="order">
                <div>2</div>
                <div className='order-text-center'>Dominos</div>
                <div className='order-text-center'>Rameez Ali P K</div>
                <Button onClick={navigateToInvoice} variant="outlined">View Bill</Button>
            </div>
            <hr className="order-hr" />
        </div>
    )
}

export default Order