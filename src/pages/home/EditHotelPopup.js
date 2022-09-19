import  React, { useEffect, useState } from 'react'
import './editHotelPopup.scss'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import Box from '@mui/material/Box'
// import axios from '../../components/axios/axios';
// import { baseUrl } from '../../constants/constants';


function EditHotelPopup({id,trigger,setTrigger}) {

    return (trigger) ? (
        <div className='edit-hotels-popup-main'>
            <div className="edit-hotels-popup">
                <div onClick={()=>setTrigger(false)} className="edit-hotels-popup-close-btn">
                    <i className="fa-solid fa-xmark"></i>
                </div>                
                
                <div className="edit-hotel-form">
          <form>
            <h1>Edit Hotel Details</h1>
            <Box m={2}>
              <TextField 
                type={'text'} 
                required 
                fullWidth 
                label="Hotel Name" 
                variant="outlined" 
              />
            </Box>
            <Box m={2}>
              <TextField
                type={'text'} 
                required 
                fullWidth 
                label="Location" 
                variant="outlined" 
              />
            </Box>
            <Box m={2}>
              <TextField
                type={'number'} 
                required 
                fullWidth 
                label="Phone Number" 
                variant="outlined" 
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
              />
            </Box>
            
            <div className='add-hotel-username-pass'>
            <Box m={2}>
              <TextField 
                required 
                fullWidth 
                label="Hotel User Name" 
                variant="outlined" 
              />
            </Box>
            <Box m={2}>
              <TextField 
                required 
                fullWidth 
                type={'password'} 
                label="Hotel Password" 
                variant="outlined"
              />
            </Box>
            </div>
            <Box m={2}>
              <label>Enter Hotel Image: </label>
              <input required type="file" name="" />
            </Box>
            <Box m={2}>
              Choose Working Days:  
              <label> Mon </label>
              <Checkbox/>
              <label>Tue </label>
              <Checkbox/>
              <label>Wed </label>
              <Checkbox/>
              <label>Thurs </label>
              <Checkbox/>
              <label>Fri </label>
              <Checkbox/>
              <label>Sat </label>
              <Checkbox/>
              <label>Sun </label>
              <Checkbox/>
            </Box>
            <Box>
              <Box m={2}>
                <label htmlFor="">Dine In</label>
                <Checkbox label={"dine-in"}/>
                <label htmlFor="">Take Away</label>
                <Checkbox label={"take-away"}/>
              
                <label> Opening Time: </label>
                <input type="time" />
                <label> Closing Time: </label>
                <input type="time" />
              </Box>
            </Box>
            <Box m={2}>
              <label>Veg</label>
              <Checkbox label={"veg"}/>
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

export default EditHotelPopup 