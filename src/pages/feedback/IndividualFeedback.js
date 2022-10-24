import React from "react";
import { Paper } from "@mui/material";
import { useState } from "react";
import DeleteFeedbackPopUp from "./DeleteFeedbackPopUp";
import { localDate } from "../../services/localDate";
import { localTime } from "../../services/localTime";

const IndividualFeedback = ({ e }) => {
  const [readMore, setReadMore] = useState(false);
  const toggleBtn = () => {
    setReadMore((prevState) => !prevState);
  };
  const [trigger, setTrigger] = useState(false);
  const description = e.feedback;
  return (
    <div>
      <Paper elevation={3}>
        <div className="feedback">
          <div onClick={() => setTrigger(true)} className="message-delete-btn">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <div className="feed">
            {readMore ? description : description.substring(0, 45) + "..."}
            <button className="read-more-btn" onClick={toggleBtn}>
              {readMore ? "Read Less" : "Read More"}
            </button>
          </div>

          <div className="msg-time">
            <div>{localTime(e.created_at)}</div>
            {localDate(e.created_at)}
          </div>
        </div>
      </Paper>

      <DeleteFeedbackPopUp
        id={e.id}
        trigger={trigger}
        setTrigger={setTrigger}
      />
    </div>
  );
};

export default IndividualFeedback;
