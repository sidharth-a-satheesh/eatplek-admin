import React from 'react'
import { Paper } from '@mui/material'
import { useState } from 'react'
import DeleteFeedbackPopUp from './DeleteFeedbackPopUp'

const IndividualFeedback = ({}) => {
    const [readMore, setReadMore] = useState(false);
  const toggleBtn = () => {
    setReadMore((prevState) => !prevState);
  };
  const [trigger, setTrigger] = useState(false);
  const description = "qwertyuiopw ertyuidf ghjertyuirftgyh ujikedrftgy hujikerftgyhujikrf tgyhujikolqwe rtyuiopwerty uidfghjertyuirftgy hujikedrftgyhc ujikerftgyhujik rftgyhujikol"
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
            <div>05:23 PM</div>
            15/09/2001
          </div>
        </div>
      </Paper>

      <DeleteFeedbackPopUp trigger={trigger} setTrigger={setTrigger} />
    </div>
  )
}

export default IndividualFeedback