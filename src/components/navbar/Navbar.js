import React from 'react'
import './navbar.scss'
import { useLocation } from 'react-router-dom'
import logo from '../../assets/Logo-nav.png'
import { Link } from 'react-router-dom';



export default function Navbar(){
    let location = useLocation();
    console.log(location.pathname);
    if(location.pathname === "/admin-login" || location.pathname === "/invoice"){
        return null;
    }
    return (
        <div className='nav-main'>
            <div className='nav-logo'>
                <img src={logo} alt="logo" />
            </div>
            <div className='nav-items'>
                <Link to="/">
                    <p>Home</p>
                </Link>
                <Link to="/orders">
                    <p>Orders</p>
                </Link>
                <Link to="/">
                    <p>Revenue</p>
                </Link>
                <Link to="/">
                    <p>Decline</p>
                </Link>
            </div>
        </div>
    );
}
