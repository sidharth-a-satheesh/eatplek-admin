import  React, { useState } from 'react'
import './addHotelPopup.scss'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import Box from '@mui/material/Box'
import axios from '../../components/axios/axios';
import { baseUrl } from '../../constants/constants';


function AddHotelPopup({trigger,setTrigger}) {
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [number, setNumber] = useState('')
  const [foodType, setFoodType] = useState('')
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [image, setImage] = useState('')
  const [dineIn, setDineIn] = useState(true)
  const [takeAway, setTakeAway] = useState(true)
  const [veg, setVeg] = useState(false)

  const postData = (e) =>{
    e.preventDefault();
    // console.log(name)
    // console.log(location)
    // console.log(number)
    // console.log(foodType)
    // console.log(user)
    // console.log(pass)
    console.log(image)
    // console.log(dineIn)
    // console.log(takeAway)
    // console.log(veg)
    axios.post(`${baseUrl}/restaurant/`,{
      "name": "Test",
      "location": "Testing",
      "phone": "1245678903",
      "type": "Test,Chinese,Fried Chicken",
      "image": "https://static.remove.bg/remove-bg-web/37843dee2531e43723b012aa78be4b91cc211fef/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
      "dine_in": false,
      "take_away": true,
      "username": "testtt",
      "password": "testtt123"
    },{
      headers:{
      "Content-Type":"application/json",
      // "withCredentials": false,
      // "Access-Control-Allow-Credentials":true,
      "Token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2NTk2OTA4Mzd9.nYDEhq6zhTfdFposxla3BdxaEnT5zM0_J6K30RC6_Ws",
    }}).then((response)=>{
      console.log(response.data.restaurants)
    })
  }


    
    return (trigger) ? (
        <div className='add-hotels-popup-main'>
            <div className="add-hotels-popup">
                <div onClick={()=>setTrigger(false)} className="add-hotels-popup-close-btn">
                    <i className="fa-solid fa-xmark"></i>
                </div>                
                
                <div className="add-hotel-form">
          <form  >
            <h1>Enter Hotel Details</h1>
            <Box m={2}>
              <TextField 
                type={'text'} 
                required 
                fullWidth 
                id="add-hotel-name" 
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
                id="add-hotel-location" 
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
                id="add-hotel-number" 
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
                id="add-hotel-food-type" 
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
                id="add-hotel-username" 
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
                id="add-hotel-password" 
                label="Hotel Password" 
                variant="outlined"
                value={pass}
                onChange={(e)=>setPass(e.target.value)} 
              />
            </Box>
            </div>
            <Box m={2}>
              <label htmlFor="">Enter Hotel Image: </label>
              <input required type="file" name="" value={image} id="hotel-img" onChange={(e)=>setImage(e.target.value)} />
            </Box>
            <Box m={2}>
              <label htmlFor="">Dine In</label>
              <Checkbox label={"dine-in"} value={dineIn} defaultChecked onChange={(e)=>setDineIn(e.target.value)}/>
              <label htmlFor="">Take Away</label>
              <Checkbox label={"take-away"} value={takeAway} defaultChecked onChange={(e)=>setTakeAway(e.target.value)}/>
            </Box>
            <Box m={2}>
              <label htmlFor="">Veg</label>
              <Checkbox label={"veg"}  value={veg} onChange={(e)=>setVeg(e.target.value)}/>
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

export default AddHotelPopup 