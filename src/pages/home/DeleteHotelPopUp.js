import React from "react";
import "./deleteHotelPopUp.scss";
import { Button, Box } from "@mui/material";
import apis from "../../components/axios/axios";

const DeleteHotelPopUp = ({ id, trigger, setTrigger }) => {
  const deleteHotel = (id) => {
    console.log(id);
    apis
      .delete(`restaurant/${id}`, {
        headers: {
          Token: localStorage.getItem("jwt_admin"),
        },
      })
      .then((response) => {
        console.log("Deleted");
        console.log(response);
        window.location.reload(true);
      });
  };
  return trigger ? (
    <div className="delete-hotels-popup-main">
      <div className="delete-hotels-popup">
        <div
          onClick={() => setTrigger(false)}
          className="delete-hotels-popup-close-btn"
        >
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div className="delete-hotels-sub">
          <div>Are you sure you want to delete this hotel</div>
          <Box display="flex" justifyContent="center" m={3}>
            <Button
              onClick={() => deleteHotel(id)}
              variant="contained"
              color="error"
            >
              Confirm Delete
            </Button>
          </Box>
        </div>
      </div>
    </div>
  ) : null;
};

export default DeleteHotelPopUp;
