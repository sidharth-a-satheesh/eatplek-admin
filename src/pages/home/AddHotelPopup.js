import  React, { useState } from 'react'
import './addHotelPopup.scss'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import Box from '@mui/material/Box'
import axios from '../../components/axios/axios';
import { baseUrl, API_KEY } from '../../constants/constants';


function AddHotelPopup({trigger,setTrigger}) {
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [number, setNumber] = useState('')
  const [foodType, setFoodType] = useState('')
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [image, setImage] = useState('')
  const [rawImage, setRawImage] = useState(null)
  const [dineIn, setDineIn] = useState(true)
  const [takeAway, setTakeAway] = useState(true)
  const [veg, setVeg] = useState(false)

  const postData = (e) =>{
    console.log(image)
    e.preventDefault()

    axios.post(`${baseUrl}/restaurant`,{
      "name": `${name}`,
      "location": `${location}`,
      "phone": `${number}`,
      "type": `${foodType}`,
      "image": `${image}`,
      "dine_in": `${dineIn}`,
      "take_away": `${takeAway}`,
      "username": `${user}`,
      "password": `${pass}`,
    },{
      headers:{
      "Content-Type":"application/json",
      "Token":`${API_KEY}`,
    }}).then((response)=>{
      console.log("Restaurant Added Successfully")
      console.log(response.data.restaurants)
      window.location.reload(true)
    })
  }

  const handleImage = (e) =>{
    setRawImage(e.target.files[0])
    console.log(e.target.files[0])
    setImage(e.target.value)
    const formData = new FormData();
    formData.append("file",rawImage)
    axios.post(`${baseUrl}/upload`,{
      "image": formData
    },{
      headers:{
      "Token":`${API_KEY}`,
    }}).then((response)=>{
      console.log(response)
    })
  }


    
    return (trigger) ? (
        <div className='add-hotels-popup-main'>
            <div className="add-hotels-popup">
                <div onClick={()=>setTrigger(false)} className="add-hotels-popup-close-btn">
                    <i className="fa-solid fa-xmark"></i>
                </div>                
                
                <div className="add-hotel-form">
          <form onSubmit={postData} >
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
              <input required type="file" name="" value={image} id="hotel-img" onChange={handleImage} />
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
              <Button type={'submit'} variant="contained">SUBMIT</Button>
            </Box>
          </form>
        </div>
            </div>
        </div>
    ) : null;
}

export default AddHotelPopup 