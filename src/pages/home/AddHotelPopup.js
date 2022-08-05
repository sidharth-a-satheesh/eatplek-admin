import  React from 'react'
import './addHotelPopup.scss'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import Box from '@mui/material/Box'


function AddHotelPopup({trigger,setTrigger}) {
    
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
              />
            </Box>
            
            <div className='add-hotel-username-pass'>
            <Box m={2}>
              <TextField required fullWidth id="add-hotel-username" label="Hotel User Name" variant="outlined" />
            </Box>
            <Box m={2}>
              <TextField required fullWidth id="add-hotel-password" label="Hotel Password" variant="outlined" />
            </Box>
            </div>
            <Box m={2}>
              <label htmlFor="">Enter Hotel Image: </label>
              <input required type="file" name="" id="hotel-img" />
            </Box>
            <Box m={2}>
              <label htmlFor="">Dine In</label>
              <Checkbox label={"dine-in"} defaultChecked />
              <label htmlFor="">Take Away</label>
              <Checkbox label={"take-away"} defaultChecked />
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