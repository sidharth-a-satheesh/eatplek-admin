import React from 'react'
import './deleteMsgPopUp.scss'
import { Button, Box } from '@mui/material'

const DeleteMsgPopUp = ({id, trigger, setTrigger}) => {

    return(trigger)? (
        <div className='delete-msg-popup-main'>
            <div className="delete-msg-popup">
                <div onClick={()=>setTrigger(false)} className="delete-msg-popup-close-btn">
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <div className="delete-msg-sub">
                    <div>Are you sure you want to delete this message</div>
                    <Box display="flex" justifyContent="center"  m={3}>
                        <Button  variant="contained" color ="error">Confirm Delete</Button>
                    </Box>
                </div>
            </div>

        </div>
    ):null
}

export default DeleteMsgPopUp