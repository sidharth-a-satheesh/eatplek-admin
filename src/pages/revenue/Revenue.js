import React, { useState } from "react";
import "./revenue.scss";
import Button from "@mui/material/Button";
import apis from "../../components/axios/axios";

const Revenue = () => {
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState(null);
  const [data, setData] = useState({ Total: 0, Restaurants: [] });

  let onFormSubmit = async (e) => {
    e.preventDefault();
    setSuccess(true);
    let res = await apis.post("admin/revenue", formData, {
      headers: {
        "Content-Type": "application/json",
        Token: localStorage.getItem("jwt_admin"),
      },
    });
    console.log(res);
    setData(res);
  };

  return (
    <div className="revenue-main">
      <h1>Revenue</h1>
      <form onSubmit={onFormSubmit}>
        <div className="revenue-choose-date">
          <label for="start">Start date:</label>
          <input
            type="date"
            id="start"
            name="start_date"
            min="2022-08-06"
            max="2040-12-31"
          ></input>
          <label className="end-date-label" for="end">
            End date:
          </label>
          <input
            type="date"
            id="end"
            name="end_date"
            min="2022-08-06"
            max="2040-12-31"
          ></input>
          <Button variant="contained" type="submit">
            {success ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </form>
      <h1 className="revenue-text-right">Total Revenue: ₹50,000</h1>
      <div className="revenue-hotel-heading">
        <div>Sl. No.</div>
        <div>Hotel Name</div>
        <div>Revenue</div>
      </div>
      <hr className="revenue-hr" />
      {data.Restaurants.map((e, i) => {
        return (
          <>
            <div className="revenue-hotel">
              <div>1</div>
              <div>The Smocky Shack</div>
              <div>₹5,000</div>
            </div>
            <hr className="revenue-hr" />
          </>
        );
      })}
    </div>
  );
};

export default Revenue;
