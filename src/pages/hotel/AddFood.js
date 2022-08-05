import React from 'react'
import './addFood.scss'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import Box from '@mui/material/Box'

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
            <Box m={2}>
              <label htmlFor="food-category-selection">Choose Food Category: </label>
            <select name="food-category-selection" id="food-category-selection">
              <option value="" disabled selected>Choose your option</option>
              <option value="Category1">Category 1</option>
              <option value="Category2">Category 2</option>
              <option value="Category3">Category 3</option>
              <option value="Category4">Category 4</option>
              <option value="Category5">Category 5</option>
            </select>
            </Box>
            <Box m={2}>
            <label htmlFor="">Veg/Non-Veg: </label>
            <select name="food-type-selection" id="food-type-selection">
            <option value="" disabled selected>Choose your option</option>
              <option value="non-veg">Non-veg</option>
              <option value="veg">Veg</option>
            </select>
            
            </Box>
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