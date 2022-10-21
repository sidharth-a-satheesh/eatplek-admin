import React, { useState } from "react";
import "./deleteFeedbackPopUp.scss";
import { Button, Box } from "@mui/material";
import apis from "../../components/axios/axios";

const DeleteMsgPopUp = ({ id, trigger, setTrigger }) => {
  let onDelete = async () => {
    setSuccess(true);
    await apis.delete("request/" + id, {
      headers: {
        "Content-Type": "application/json",
        Token: localStorage.getItem("jwt_admin"),
      },
    });
    window.location.reload();
  };

  const [success, setSuccess] = useState(false);

  return trigger ? (
    <div className="delete-msg-popup-main">
      <div className="delete-msg-popup">
        <div
          onClick={() => setTrigger(false)}
          className="delete-msg-popup-close-btn"
        >
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div className="delete-msg-sub">
          <div>Are you sure you want to delete this message</div>
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

export default DeleteMsgPopUp;
