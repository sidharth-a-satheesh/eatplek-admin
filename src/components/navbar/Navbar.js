import React from 'react'
import './navbar.scss'
// import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';



export default function Navbar(){
    // let {pathname} = useLocation();
    // console.log(pathname)
    // if(pathname === "/login"){
    //     return null;
    // }else
    return (
        <div className='nav-main'>
            <div className='nav-logo'></div>
            <div className='nav-items'>
                <Link to="/">
                    <p>Home</p>
                </Link>
                
            </div>
        </div>
    );
}
