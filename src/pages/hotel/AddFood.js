import React from 'react'
import './addFood.scss'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import Box from '@mui/material/Box'
import { Select, FormControl, InputLabel } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

const AddFood = ({trigger,setTrigger}) => {

  return(trigger)? (
    <div className='add-food-popup-main'>
        <div className="add-food-popup">
          <div onClick={()=>setTrigger(false)} className="add-food-popup-close-btn">
            <i className="fa-solid fa-xmark"></i>
          </div>                
                
        <div className="add-food-form">
          <form>
            <h1>Enter Food Details</h1>
            <div className="add-food-select">
                <FormControl>
                  <InputLabel id="choose-catogory">Food Category</InputLabel>
                    <Select
                      labelId="choose-catogory"
                      id="demo-choose-catogory"
                      label="Category"
                    >
                    <MenuItem>Ten</MenuItem>
                  </Select>
                </FormControl>
                <FormControl>
                  <InputLabel id="choose-veg-or-non">Veg/Non-Veg</InputLabel>
                  <Select
                    fullWidth
                    labelId="choose-veg-or-non"
                    id="demo-choose-veg"
                    label="Veg/Non-Veg"
                  >
                    <MenuItem>Veg</MenuItem>
                    <MenuItem>Non-Veg</MenuItem>
                  </Select>
                </FormControl>

            </div>
            <Box m={2}>
              <TextField 
                type={'text'} 
                required 
                fullWidth 
                id="add-food-name" 
                label="Food Name" 
                variant="outlined" 
              />
            </Box>
            <Box m={2}>
              <TextField
                type={'text'} 
                multiline
                rows={3}
                // required 
                fullWidth 
                id="add-food-description" 
                label="Food Description" 
                variant="outlined" 
              />
            </Box>
            <div className='add-food-cost-ac-non-ac'>
                <Box m={2}>
                  <label htmlFor="">Non-AC</label>
                  <Checkbox label={"food-non-ac"} defaultChecked/>
                </Box>
                <Box m={2}>
                  <TextField 
                    type={'number'} 
                    required
                    // fullWidth 
                    id="add-food-cost-non-ac" 
                    label="Price: (Non-AC)" 
                    variant="outlined" 
                  />
                </Box>
                <Box m={2}>
                  <label htmlFor="">AC</label>
                  <Checkbox label={"food-ac"}/>
                </Box>
                <Box m={2}>
                  <TextField 
                    type={'number'} 
                    // fullWidth 
                    id="add-food-cost-ac" 
                    label="Price: (AC)" 
                    variant="outlined" 
                  />
                </Box>
            </div>
            <Box m={2}>
              <label htmlFor="">Enter Food Image: </label>
              <input required type="file" name="" id="food-img" />
            </Box>
            <Box m={2}>
              <Button type={'submit'} variant="contained">SUBMIT</Button>
            </Box>
          </form>
        </div>
            </div>
    </div>
  ):null;
}

export default AddFood