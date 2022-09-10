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
import axios from '../../components/axios/axios';
import { baseUrl, API_KEY } from '../../constants/constants';
import EditHotelPopup from './EditHotelPopup';


// http://eatplek.herokuapp.com/restaurant



const Home = () => {
  // useEffect(() => {
  //   fetchTasks();
  // }, []);

  // // const [tasks, setTasks] = useState([]);

  // let fetchTasks = async () => {
  //   let result = await axios.get("/restaurant");
  //   // setTasks(result.data);
  //   console.log(result);
  // };
  const [duplicateData, setDuplicateData] = useState([])
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(`${baseUrl}/restaurant`).then((response)=>{
      console.log(response.data.restaurants)
      setData(response.data.restaurants)
      setDuplicateData(response.data.restaurants)
    })
  },[])
  const viewDineIn = () =>{
    const result = duplicateData.filter((e)=>{
      return e.dine_in===true
    })
    setData(result)
  }
  const viewTakeAway = () =>{
    const result = duplicateData.filter((e)=>{
      return e.take_away===true
    })
    setData(result)
  }


  const [addHotelPopup, setAddHotelPopup] = useState(false);
  const [editHotelPopup, setEditHotelPopup] = useState(false);

  const update = (id) =>{
    console.log(id)
  }

  const deleteHotel = (id) =>{
    console.log(id) 
    axios.delete(`${baseUrl}/restaurant/${id}`,{
      headers:{
      "Token":`${API_KEY}`,
    }}).then((response)=>{
      console.log("Deleted")
      console.log(response)
      window.location.reload(true)
    })
  }
    
  return (
    <div className='home-main'>
      <div className='add-hotels-btn'>
        <Button onClick={()=>setAddHotelPopup(true)} variant="contained">Add Hotels</Button>
      </div>
      <FormControl>
      <RadioGroup
        defaultValue={'dine-in'}
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="dine-in" control={<Radio />} label="Dine In" onClick={viewDineIn} />
        <FormControlLabel value="take-away" control={<Radio />} label="Take Away" onClick={viewTakeAway} />
      </RadioGroup>
    </FormControl>
      <div className="dash-items">
        {
          data.map((e)=>(
            
            <div key={e.id}>
              
                <Link to='/hotel'>
                  <DashHotels
                    name={e.name}
                    location={e.location}
                    foodType={e.type}
                    hotel_img={e.image}
                  />
                </Link>
                <div className="hotel-main-btns">
                  <Box m={2}>
                    {/* <Button onClick={()=>setEditHotelPopup(true)}  variant="contained">EDIT HOTEL</Button> */}
                    <Button onClick={()=>update(e.id)}  variant="contained">EDIT HOTEL</Button>
                    <EditHotelPopup id={e.id} trigger={editHotelPopup} setTrigger={setEditHotelPopup}
                      hotelDineIn={e.dine_in}
                      hotelFoodType={e.type}
                      hotelName={e.name}
                      hotelLoc={e.location}
                      hotelPhone={e.phone}
                      hotelUser={e.username}
                      hotelPass={e.password}
                      hotelImage={e.image}
                      hotelTakeAway={e.take_away}
                      // hotelVeg={e.veg}

                    />
                  </Box>
                  <Box m={2}>
                    <Button variant="contained" onClick={()=>deleteHotel(e.id)} color="error">DELETE HOTEL</Button>
                  </Box>
                </div>
              </div>
          ))
        }
      </div>
      {/* <div className='add-hotels-popup-main'>
        <div className='add-hotels-popup'>
          
        </div>
      </div> */}
      <AddHotelPopup trigger={addHotelPopup} setTrigger={setAddHotelPopup} />
    </div>
  )
}

export default Home