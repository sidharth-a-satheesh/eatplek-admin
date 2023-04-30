import React, { useEffect, useState } from "react";
import apis from "../../components/axios/axios";
import "./decline.scss";
import { localTime } from "../../services/localTime";
import { httpHeaders } from "../../services/httpHeaders";
import { localDate } from "../../services/localDate";

const Decline = () => {
  useEffect(() => {
    fetchOrders();
  }, []);

  let [orders, setOrders] = useState([]);

  let fetchOrders = async () => {
    let { data } = await apis.get("order?status=declined", {
      headers: {
        "Content-Type": "application/json",
        Token: localStorage.getItem("jwt_admin"),
      },
    });
    // console.log(data);
    setOrders(data.result);
  };

  return (
    <div className="decline-main">
      <h1>Declined Requests</h1>
      <div className="declined-heading">
        <div>Sl. No.</div>
        <div className="declined-text-center">Hotel Name</div>
        <div className="declined-text-center">Customer Name</div>
        <div className="declined-text-center">Customer No.</div>
        <div className="declined-text-center">Order Type</div>
        <div className="declined-text-center">Time</div>
        <div className="declined-text-right">Date</div>
      </div>
      <hr className="declined-hr" />
      {orders && orders.map((item, index) => {
        return (
          <div key={index}>
            <div className="declined-order">
              <div>{index+1}</div>
              <div className="declined-text-center">{item.restaurant}</div>
              <div className="declined-text-center">{item.customer}</div>
              <div className="declined-text-center">{item.contact}</div>
              <div className="declined-text-center">{item.type}</div>
              <div className="declined-text-center">
                {localTime(item.declined_at)}
              </div>
              <div className="declined-text-right">
                {localDate(item.declined_at)}
              </div>
            </div>
            <hr className="declined-hr" />
          </div>
        );
      })}
    </div>
  );
};

export default Decline;
