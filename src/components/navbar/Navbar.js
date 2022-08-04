import React from 'react'
import './navbar.scss'
import { useLocation } from 'react-router-dom'
import logo from '../../assets/Logo-nav.png'
import { Link } from 'react-router-dom';



export default function Navbar(){
    let {location} = useLocation();
    console.log(location)
    if(location === "/admin-login"){
        return null;
    }else
    return (
        <div className='nav-main'>
            <div className='nav-logo'>
                <img src={logo} alt="logo" />
            </div>
            <div className='nav-items'>
                <Link to="/">
                    <p>Home</p>
                </Link>
                <Link to="/">
                    <p>Revenue</p>
                </Link>
            </div>
        </div>
    );
}
