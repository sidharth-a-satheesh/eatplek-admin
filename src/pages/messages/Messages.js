import React, { useEffect, useState } from "react";
import "./messages.scss";
import apis from "../../components/axios/axios";

import IndividualMsg from "./IndividualMsg";

const Messages = () => {
  useEffect(() => {
    fetchRequests();
  }, []);

  let fetchRequests = async () => {
    let { data } = await apis.get("request", {
      headers: {
        "Content-Type": "application/json",
        Token: localStorage.getItem("jwt_admin"),
      },
    });
    setRequests(data.result);
  };

  let [requests, setRequests] = useState([]);

  return (
    <div className="messages-main">
      <h1>Add Food Requests</h1>
      <div className="messages">
        {requests && requests.map((e) => (
          <IndividualMsg key={e.id} e={e} />
        ))}
      </div>
    </div>
  );
};

export default Messages;
