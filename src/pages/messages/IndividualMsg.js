import React, { useState } from "react";
import { Paper } from "@mui/material";
import "./messages.scss";
import DeleteMsgPopUp from "./DeleteMsgPopUp";

const IndividualMsg = ({ e }) => {
  const [readMore, setReadMore] = useState(false);
  const toggleBtn = () => {
    setReadMore((prevState) => !prevState);
  };
  const [trigger, setTrigger] = useState(false);
  return (
    <div>
      <Paper elevation={3}>
        <div className="message">
          <div onClick={() => setTrigger(true)} className="message-delete-btn">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <div className="message-req">
            <div className="msg-bold">Food: </div>
            <div>{e.name}</div>
          </div>
          <div className="message-req">
            <div className="msg-bold">Price: </div>
            <div>₹{e.price}/-</div>
          </div>
          <div className="message-req">
            <div className="msg-bold">Restaurant: </div>
            <div>{e.restaurant}</div>
          </div>
          <div className="msg-bold">Description:</div>
          <div className="msg-des">
            {readMore ? e.description : e.description.substring(0, 45) + "..."}
            <button className="read-more-btn" onClick={toggleBtn}>
              {readMore ? "Read Less" : "Read More"}
            </button>
          </div>

          <div className="msg-time">
            <div>{e.created_at}</div>
            {e.created_at.substring(0, 10)}
          </div>
        </div>
      </Paper>

      <DeleteMsgPopUp id={e.id} trigger={trigger} setTrigger={setTrigger} />
    </div>
  );
};

export default IndividualMsg;
