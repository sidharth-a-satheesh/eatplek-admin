import React, { useEffect, useState } from "react";
import "./revenue.scss";
import Button from "@mui/material/Button";
import apis from "../../components/axios/axios";

const Revenue = () => {
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    start_date: new Date(new Date().getTime() - 6 * 24 * 60 * 60 * 1000),
    end_date: new Date(),
  });
  const [data, setData] = useState({ Total: 0, Restaurants: [] });

  useEffect(() => {
    initialRevenue();
  }, []);

  let initialRevenue = async () => {
    let res = await apis.post(
      "admin/revenue",
      {
        start_date: new Date(formData.start_date).toISOString(),
        end_date: new Date(formData.end_date).toISOString(),
      },
      {
        headers: {
          "Content-Type": "application/json",
          Token: localStorage.getItem("jwt_admin"),
        },
      }
    );
    // console.log(res.data);
    setData(res.data);
  };

  let onFormSubmit = async (e) => {
    e.preventDefault();
    setSuccess(true);
    let res = await apis.post(
      "admin/revenue",
      {
        start_date: new Date(formData.start_date).toISOString(),
        end_date: new Date(formData.end_date).toISOString(),
      },
      {
        headers: {
          "Content-Type": "application/json",
          Token: localStorage.getItem("jwt_admin"),
        },
      }
    );
    // console.log(res.data);
    setData(res.data);
    setSuccess(false);
  };

  let onInputChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
            onChange={onInputChange}
            defaultValue={new Date(formData.start_date)
              .toISOString()
              .substr(0, 10)}
            required
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
            onChange={onInputChange}
            defaultValue={new Date(formData.end_date)
              .toISOString()
              .substr(0, 10)}
            required
          ></input>
          <Button variant="contained" type="submit">
            {success ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </form>
      <h1 className="revenue-text-right">Total Revenue: {data.Total}</h1>
      <div className="revenue-hotel-heading">
        <div>Sl. No.</div>
        <div>Hotel Name</div>
        <div>Revenue</div>
      </div>
      <hr className="revenue-hr" />
      {data.Restaurants &&
        data.Restaurants.map((e, i) => {
          return (
            <>
              <div className="revenue-hotel">
                <div>{i + 1}</div>
                <div>{e.Name}</div>
                <div>₹{e.Revenue}</div>
              </div>
              <hr className="revenue-hr" />
            </>
          );
        })}
    </div>
  );
};

export default Revenue;
