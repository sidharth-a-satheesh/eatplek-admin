import React from 'react'
import './deleteFoodPopUp.scss'
import { Button, Box } from '@mui/material'
// import axios from '../../components/axios/axios';
// import { baseUrl, API_KEY } from '../../constants/constants';

const DeleteFoodPopUp = ({id, trigger, setTrigger}) => {
    // const deleteHotel = (id) =>{
    //     console.log(id) 
    //     axios.delete(`${baseUrl}/restaurant/${id}`,{
    //     headers:{
    //     "Token":`${API_KEY}`,
    //     }}).then((response)=>{
    //     console.log("Deleted")
    //     console.log(response)
    //     window.location.reload(true)
    //     })
    // }
    return(trigger)? (
        <div className='delete-food-popup-main'>
            <div className="delete-food-popup">
                <div onClick={()=>setTrigger(false)} className="delete-food-popup-close-btn">
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <div className="delete-food-sub">
                    <div>Are you sure you want to delete this Food</div>
                    <Box display="flex" justifyContent="center"  m={3}>
                        <Button  variant="contained" color ="error">Confirm Delete</Button>
                    </Box>
                </div>
            </div>

        </div>
    ):null
}

export default DeleteFoodPopUp