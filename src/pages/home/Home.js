import React from 'react'
import { Link } from 'react-router-dom';
import './home.scss'
import Button from '@mui/material/Button';
import DashHotels from './DashHotels';

const Home = () => {
  return (
    <div className='home-main'>
      <div className='add-hotels-btn'>
        <Button variant="contained">Add Hotels</Button>
      </div>
      <div className="dash-items">
                <Link to='/hotel'><DashHotels /></Link>
                <Link to='/hotel'><DashHotels /></Link>
                <Link to='/hotel'><DashHotels /></Link>
                <Link to='/hotel'><DashHotels /></Link>
                <Link to='/hotel'><DashHotels /></Link>
                <Link to='/hotel'><DashHotels /></Link>
                <Link to='/hotel'><DashHotels /></Link>
                <Link to='/hotel'><DashHotels /></Link>
            </div>
    </div>
  )
}

export default Home