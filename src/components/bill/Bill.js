import React, { useEffect, useState } from "react";
import "./bill.scss";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import apis from "../axios/axios";
import { localTime } from "../../services/localTime";
import { localDate } from "../../services/localDate";

const Bill = () => {
  let navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fethcBill();
  }, []);

  let [bill, setBill] = useState(null);

  let fethcBill = async () => {
    let { data } = await apis.get("order/" + id, {
      headers: {
        "Content-Type": "application/json",
        Token: localStorage.getItem("jwt_admin"),
      },
    });
    // console.log(data);
    setBill(data.result);
  };

  if (!bill) return null;
  return (
    <div className="bill-bg">
      <div className="bill-go-back-btn">
        <Button
          onClick={() => navigate(-1)}
          style={{ backgroundColor: "white", color: "black" }}
          variant="contained"
        >
          <i className="fa-solid fa-arrow-left-long"></i> Go Back
        </Button>
      </div>
      <div className="bill-main">
        <div className="bill">
          <div className="bill-top">
            <div className="bill-top-details">
              <div>
                Bill to: <span className="bill-bold">{bill.user.name}</span>
              </div>
              <div>
                Phone: <span className="bill-bold">{bill.user.phone}</span>
              </div>
              <div>
                Order type: <span className="bill-bold">{bill.cart.type}</span>
              </div>
            </div>
            <div className="bill-top-heading">INVOICE</div>
          </div>
          <div className="bill-middle-main">
            <div className="bill-hotel-name">{bill.cart.restaurant_name}</div>
            <div className="bill-hotel-location-number">
              {bill.restaurant.location} , {bill.restaurant.phone}
            </div>
            <hr className="bill-dashed-hr" />
            <div className="bill-middle-sub">
              <div className="bill-middle-sub-heading">
                <div className="bill-item">Item</div>
                <div className="bill-text-center">Unit Price</div>
                <div className="bill-text-center">Quantity</div>
                <div className="bill-total">Total</div>
              </div>
              {bill.cart.items.map((item, index) => {
                return (
                  <div key={index}>
                    <hr className="bill-items-hr" />
                    <div className="bill-middle-items">
                      <div className="bill-item">{item.name}</div>
                      <div className="bill-text-center">{item.price}</div>
                      <div className="bill-text-center">{item.quantity}</div>
                      <div className="bill-total">{item.total}</div>
                    </div>
                  </div>
                );
              })}
              <div className="bill-middle-tax">
                <div>Taxes and Charges</div>
                <div>₹ 0</div>
              </div>
              <div className="bill-total-price">
                Total Price: Rs {bill.cart.total_amount}/-
              </div>
              <div className="bill-thank-you">THANK YOU</div>
            </div>
          </div>
          <div className="bill-bottom-main">
            <div className="bill-bottom">
              <div>
                Billing Date:{" "}
                <span className="bill-text-bold">
                  {localDate(bill.created_at)}
                </span>
              </div>
              <div>
                Billing Time:{" "}
                <span className="bill-text-bold">
                  {localTime(bill.created_at)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bill;
