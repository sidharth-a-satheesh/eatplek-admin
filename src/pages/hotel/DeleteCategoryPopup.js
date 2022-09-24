import React, { useState } from "react";
import "./deleteFoodPopUp.scss";
import { Button, Box } from "@mui/material";
import apis from "../../components/axios/axios";
import { httpHeaders } from "../../services/httpHeaders";
// import axios from '../../components/axios/axios';
// import { baseUrl, API_KEY } from '../../constants/constants';

const DeleteCategoryPopUp = ({ delId, trigger, setTrigger }) => {
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
  console.log(delId);

  const [success, setSuccess] = useState(false);

  let onDelete = async () => {
    setSuccess(true);
    await apis.delete("category/" + delId, {
      headers: {
        "Content-Type": "application/json",
        Token: localStorage.getItem("jwt_admin"),
      },
    });
    window.location.reload();
  };

  return trigger ? (
    <div className="delete-food-popup-main">
      <div className="delete-food-popup">
        <div
          onClick={() => setTrigger(false)}
          className="delete-food-popup-close-btn"
        >
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div className="delete-food-sub">
          <div>
            Are you sure you want to delete this Category? Associated food items
            will also be deleted.
          </div>
          <Box display="flex" justifyContent="center" m={3}>
            <Button variant="contained" color="error" onClick={onDelete}>
              {success ? "Deleting..." : "Confirm Delete"}
            </Button>
          </Box>
        </div>
      </div>
    </div>
  ) : null;
};

export default DeleteCategoryPopUp;
