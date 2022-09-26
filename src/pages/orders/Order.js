import React, { useEffect, useState } from "react";
import "./order.scss";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import apis from "../../components/axios/axios";

const Order = () => {
  const navigate = useNavigate();
  const navigateToInvoice = (id) => {
    navigate("/invoice/" + id);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  let [orders, setOrders] = useState([]);

  let fetchOrders = async () => {
    let { data } = await apis.get("order", {
      headers: {
        "Content-Type": "application/json",
        Token: localStorage.getItem("jwt_admin"),
      },
    });
    // console.log(data);
    setOrders(data.result);
  };

  return (
    <div className="order-main">
      <h1>Orders</h1>
      <div className="order-heading">
        <div>Sl. No.</div>
        <div className="order-text-center">Hotel Name</div>
        <div className="order-text-center">Customer Name</div>
        <div className="order-text-center">Invoice</div>
      </div>
      <hr className="order-hr" />
      {orders.map((item, index) => {
        return (
          <div key={item.id}>
            <div className="order">
              <div>{index + 1}</div>
              <div className="order-text-center">
                {item.cart.restaurant_name}
              </div>
              <div className="order-text-center">{item.user.name}</div>
              <Button
                onClick={() => navigateToInvoice(item.id)}
                variant="outlined"
              >
                View Bill
              </Button>
            </div>
            <hr className="order-hr" />
          </div>
        );
      })}
    </div>
  );
};

export default Order;
