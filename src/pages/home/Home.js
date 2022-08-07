import React,{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './home.scss'
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import Box from '@mui/material/Box'
import DashHotels from './DashHotels';
import AddHotelPopup from './AddHotelPopup';
import axios from 'axios'

// http://eatplek.herokuapp.com/restaurant



const Home = () => {

  useEffect(() => {
  
  }, [])

  let hotels = [
    {
      hotelId: 1,
      hotelName: "The Smocky Shack",
      hotelLocation: "Chengannur",
      hotelFoodType : "Arabian, Bevrages, Juices"
    },
    {
      hotelId: 2,
      hotelName: "Maroosh",
      hotelLocation: "Varam",
      hotelFoodType : "Arabian, Biriyani"
    },
    {
      hotelId: 3,
      hotelName: "Mayuri",
      hotelLocation: "Dharmashala",
      hotelFoodType : "North Indian Food"
    },
  ]

  const [addHotelPopup, setAddHotelPopup] = useState(false);
  return (
    <div className='home-main'>
      <div className='add-hotels-btn'>
      <Button variant="contained">Fetch API</Button>
        <Button onClick={()=>setAddHotelPopup(true)} variant="contained">Add Hotels</Button>
      </div>
      <FormControl>
      <RadioGroup
        defaultValue={'dine-in'}
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="dine-in" control={<Radio />} label="Dine In" />
        <FormControlLabel value="take-away" control={<Radio />} label="Take Away" />
      </RadioGroup>
    </FormControl>
      <div className="dash-items">
        {
          hotels.map((e) => (
              <div key={e.hotelId}>
                <Link to='/hotel'>
                  <DashHotels
                    name={e.hotelName}
                    location={e.hotelLocation}
                    foodType={e.hotelFoodType}
                  />
                </Link>
                <div className="hotel-main-btns">
                  <Box m={2}>
                    <Button onClick={()=>setAddHotelPopup(true)}  variant="contained">EDIT HOTEL</Button>
                  </Box>
                  <Box m={2}>
                    <Button variant="contained" color="error">DELETE HOTEL</Button>
                  </Box>
                </div>
              </div>
            )
          )
        }
      </div>
      {/* <div className='add-hotels-popup-main'>
        <div className='add-hotels-popup'>
          
        </div>
      </div> */}
      <AddHotelPopup trigger={addHotelPopup} setTrigger={setAddHotelPopup}>
        
        
      </AddHotelPopup>
    </div>
  )
}

export default Home