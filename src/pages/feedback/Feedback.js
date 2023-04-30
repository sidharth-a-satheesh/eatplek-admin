import React, { useEffect, useState } from "react";
import apis from "../../components/axios/axios";
import "./feedback.scss";
import IndividualFeedback from "./IndividualFeedback";

const Feedback = () => {
  useEffect(() => {
    fetchFeedbacks();
  }, []);

  let fetchFeedbacks = async () => {
    let { data } = await apis.get("feedback", {
      headers: {
        "Content-Type": "application/json",
        Token: localStorage.getItem("jwt_admin"),
      },
    });
    setFeedbacks(data);
  };

  let [feedbacks, setFeedbacks] = useState([]);
  return (
    <div className="feedback-main">
      <h1>Feedback</h1>
      <div className="feedbacks">
        {feedbacks && feedbacks.map((e) => (
          <IndividualFeedback key={e.id} e={e} />
        ))}
      </div>
    </div>
  );
};

export default Feedback;
