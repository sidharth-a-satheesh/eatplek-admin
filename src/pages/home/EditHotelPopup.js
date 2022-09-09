import  React, { useState } from 'react'
import './editHotelPopup.scss'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import Box from '@mui/material/Box'
import axios from '../../components/axios/axios';
import { baseUrl } from '../../constants/constants';


function EditHotelPopup({id,trigger,setTrigger,hotelName,hotelLoc,hotelPhone,hotelFoodType,hotelUser,hotelPass,hotelImage,hotelDineIn,hotelTakeAway,hotelVeg}) {
  const [name, setName] = useState(hotelName)
  const [location, setLocation] = useState(hotelLoc)
  const [number, setNumber] = useState(hotelPhone)
  const [foodType, setFoodType] = useState(hotelFoodType)
  const [user, setUser] = useState(hotelUser)
  const [pass, setPass] = useState(hotelPass)
  const [image, setImage] = useState(hotelImage)
  const [dineIn, setDineIn] = useState(hotelDineIn)
  const [takeAway, setTakeAway] = useState(hotelTakeAway)
  const [veg, setVeg] = useState(hotelVeg)

  const postData = (e) =>{
    e.preventDefault();
    console.log(name)
    console.log(location)
    console.log(number)
    console.log(foodType)
    console.log(user)
    console.log(pass)
    console.log(image)
    console.log(dineIn)
    console.log(takeAway)
    console.log(veg)
    // axios.post(`${baseUrl}/restaurant`,{
    //   "name": "Test",
    //   "location": "Testing",
    //   "phone": "1245678903",
    //   "type": "Test,Chinese,Fried Chicken",
    //   "image": "https://static.remove.bg/remove-bg-web/37843dee2531e43723b012aa78be4b91cc211fef/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
    //   "dine_in": false,
    //   "take_away": true,
    //   "username": "testtt",
    //   "password": "testtt123"
    // },{
    //   headers:{
    //   "Content-Type":"application/json",
    //   "Token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2NTk2OTA4Mzd9.nYDEhq6zhTfdFposxla3BdxaEnT5zM0_J6K30RC6_Ws",
    // }}).then((response)=>{
    //   console.log(response.data.restaurants)
    // })
  }


    
    return (trigger) ? (
        <div className='edit-hotels-popup-main'>
            <div className="edit-hotels-popup">
                <div onClick={()=>setTrigger(false)} className="edit-hotels-popup-close-btn">
                    <i className="fa-solid fa-xmark"></i>
                </div>                
                
                <div className="edit-hotel-form">
          <form  >
            <h1>Edit Hotel Details</h1>
            <Box m={2}>
              <TextField 
                type={'text'} 
                required 
                fullWidth 
                label="Hotel Name" 
                variant="outlined" 
                value={name}
                onChange={(e)=>setName(e.target.value)}
              />
            </Box>
            <Box m={2}>
              <TextField
                type={'text'} 
                required 
                fullWidth 
                label="Location" 
                variant="outlined" 
                value={location}
                onChange={(e)=>setLocation(e.target.value)}
              />
            </Box>
            <Box m={2}>
              <TextField
                type={'number'} 
                required 
                fullWidth 
                label="Phone Number" 
                variant="outlined" 
                value={number}
                onChange={(e)=>setNumber(e.target.value)}
              />
            </Box>
            <Box m={2}>
              <TextField 
                type={'text'} 
                required 
                fullWidth
                multiline 
                label="Food Type" 
                variant="outlined" 
                value={foodType}
                onChange={(e)=>setFoodType(e.target.value)}
              />
            </Box>
            
            <div className='add-hotel-username-pass'>
            <Box m={2}>
              <TextField 
                required 
                fullWidth 
                label="Hotel User Name" 
                variant="outlined" 
                value={user}
                onChange={(e)=>setUser(e.target.value)}
              />
            </Box>
            <Box m={2}>
              <TextField 
                required 
                fullWidth 
                type={'password'} 
                label="Hotel Password" 
                variant="outlined"
                value={pass}
                onChange={(e)=>setPass(e.target.value)} 
              />
            </Box>
            </div>
            <Box m={2}>
              <label>Enter Hotel Image: </label>
              <input required type="file" name="" value={image} onChange={(e)=>setImage(e.target.value)} />
            </Box>
            <Box m={2}>
              <label>Dine In</label>
              <Checkbox label={"dine-in"} value={dineIn} onChange={(e)=>setDineIn(e.target.value)}/>
              <label>Take Away</label>
              <Checkbox label={"take-away"} value={takeAway} onChange={(e)=>setTakeAway(e.target.value)}/>
            </Box>
            <Box m={2}>
              <label>Veg</label>
              <Checkbox label={"veg"} value={veg} onChange={(e)=>setVeg(e.target.value)}/>
            </Box>
            <Box m={2}>
              <Button type={'submit'} onClick={postData} variant="contained">SUBMIT</Button>
            </Box>
          </form>
        </div>
            </div>
        </div>
    ) : null;
}

export default EditHotelPopup 