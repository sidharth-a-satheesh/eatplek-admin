import React from 'react'
import './addCategory.scss'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'

const AddCategory = ({trigger,setTrigger}) => {
  return (trigger)? (
    <div className='add-category-popup-main'>
        <div className="add-category-popup">
                <div onClick={()=>setTrigger(false)} className="add-category-popup-close-btn">
                    <i className="fa-solid fa-xmark"></i>
                </div>                
                
                <div className="add-category-form">
          <form  >
            <h1>Enter Category Details</h1>
            <Box m={2}>
              <TextField 
                type={'text'} 
                required 
                fullWidth 
                id="add-category-name" 
                label="Category Name" 
                variant="outlined" 
              />
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

export default AddCategory