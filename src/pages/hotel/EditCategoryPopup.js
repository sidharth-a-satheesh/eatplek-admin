import React, { useEffect, useState } from "react";
import "./addCategory.scss";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import apis from "../../components/axios/axios";
import { httpHeaders } from "../../services/httpHeaders";

const EditCategoryPopup = ({ trigger, setTrigger, id, catName }) => {
  let [name, setName] = useState(catName);

  let onFormSubmit = async (e) => {
    e.preventDefault();
    setSuccess(true);
    let res = await apis.put(
      "category/" + id,
      { name: name },
      {
        headers: {
          "Content-Type": "application/json",
          Token: localStorage.getItem("jwt_admin"),
        },
      }
    );
    console.log(res);
    window.location.reload();
  };

  const [success, setSuccess] = useState(false);

  return trigger ? (
    <div className="add-category-popup-main">
      <div className="add-category-popup">
        <div
          onClick={() => setTrigger(false)}
          className="add-category-popup-close-btn"
        >
          <i className="fa-solid fa-xmark"></i>
        </div>

        <div className="add-category-form">
          <form onSubmit={onFormSubmit}>
            <h1>Enter Category Details</h1>
            <Box m={2}>
              <TextField
                type={"text"}
                required
                fullWidth
                id="add-category-name"
                label="Category Name"
                variant="outlined"
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </Box>
            <Box m={2}>
              <Button type={"submit"} variant="contained">
                {success ? "Submitting..." : "Submit"}
              </Button>
            </Box>
          </form>
        </div>
      </div>
    </div>
  ) : null;
};

export default EditCategoryPopup;
