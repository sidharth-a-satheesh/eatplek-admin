import React, { useEffect, useState } from "react";
import "./addFood.scss";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import { Select, FormControl, InputLabel } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import apis from "../../components/axios/axios";
import { fileUpload } from "../../services/fileUpload";
import { validateFileSize } from "../../services/validateFileSize";

const AddFood = ({ trigger, setTrigger, id, name }) => {
  useEffect(() => {
    fetchFoodCategories();
  }, []);

  const [foodCategories, setFoodCategories] = useState([]);

  let fetchFoodCategories = async () => {
    let { data } = await apis.get("category");
    setFoodCategories(data.categories);
  };

  let [formData, setFormData] = useState({});
  let [imgData, setImgData] = useState(null);
  const [submitBtn, setSubmitBtn] = useState(0);

  useEffect(() => {
    myWait();
  }, [imgData]);

  let myWait = async () => {
    if (typeof imgData == "string") {
      let price = {};
      if (formData.non_ac_price)
        price["non_ac_price"] = Number(formData.non_ac_price);
      if (formData.ac_price) price["ac_price"] = Number(formData.ac_price);
      await apis.post(
        "food",
        {
          ...formData,
          ...price,
          image: imgData,
          category_id: formData.category_id.substring(
            0,
            formData.category_id.indexOf(" ")
          ),
          category_name: formData.category_id.substring(
            formData.category_id.indexOf(" ") + 1
          ),
          restaurant_id: id,
          restaurant_name: name,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Token: localStorage.getItem("jwt_admin"),
          },
        }
      );
      window.location.reload();
    }
  };

  let onInputChange = async (e) => {
    if (e.target.name === "img") {
      validateFileSize(e.target.files[0]);
      setImgData(e.target.files[0]);
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  let onFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitBtn(1);
    if (imgData) {
      let img = await fileUpload(imgData);
      setImgData(img);
    } else {
      let price = {};
      if (formData.non_ac_price)
        price["non_ac_price"] = Number(formData.non_ac_price);
      if (formData.ac_price) price["ac_price"] = Number(formData.ac_price);
      await apis.post(
        "food",
        {
          ...formData,
          ...price,
          category_id: formData.category_id.substring(
            0,
            formData.category_id.indexOf(" ")
          ),
          category_name: formData.category_id.substring(
            formData.category_id.indexOf(" ") + 1
          ),
          restaurant_id: id,
          restaurant_name: name,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Token: localStorage.getItem("jwt_admin"),
          },
        }
      );
      window.location.reload();
    }
  };

  return trigger ? (
    <div className="add-food-popup-main">
      <div className="add-food-popup">
        <div
          onClick={() => setTrigger(false)}
          className="add-food-popup-close-btn"
        >
          <i className="fa-solid fa-xmark"></i>
        </div>

        <div className="add-food-form">
          <form onSubmit={onFormSubmit}>
            <h1>Enter Food Details</h1>
            <div className="add-food-select">
              <FormControl>
                <InputLabel id="choose-catogory">Food Category</InputLabel>
                <Select
                  labelId="choose-catogory"
                  id="demo-choose-catogory"
                  label="Category"
                  name="category_id"
                  required
                  onChange={onInputChange}
                >
                  {foodCategories.map((item, index) => {
                    return (
                      <MenuItem value={item.id + " " + item.name} key={index}>
                        {item.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel id="choose-veg-or-non">Veg/Non-Veg</InputLabel>
                <Select
                  fullWidth
                  labelId="choose-veg-or-non"
                  id="demo-choose-veg"
                  label="Veg/Non-Veg"
                  name="is_veg"
                  required
                  onChange={onInputChange}
                >
                  <MenuItem value={true}>Veg</MenuItem>
                  <MenuItem value={false}>Non-Veg</MenuItem>
                </Select>
              </FormControl>
            </div>
            <Box m={2}>
              <TextField
                type={"text"}
                fullWidth
                id="add-food-name"
                label="Food Name"
                variant="outlined"
                name="name"
                required
                onChange={onInputChange}
              />
            </Box>
            <Box m={2}>
              <TextField
                type={"text"}
                multiline
                rows={3}
                // required
                fullWidth
                id="add-food-description"
                label="Food Description"
                variant="outlined"
                name="description"
                onChange={onInputChange}
              />
            </Box>
            {/* <div className="add-food-cost-ac-non-ac">
              <Box m={2}>
                <label htmlFor="">Non-AC</label>
                <Checkbox label={"food-non-ac"} defaultChecked />
              </Box> */}
            <Box m={2}>
              <TextField
                type={"number"}
                fullWidth
                id="add-food-cost-non-ac"
                label="Price: (Non-AC)"
                variant="outlined"
                name="non_ac_price"
                onChange={onInputChange}
              />
            </Box>
            {/* <Box m={2}>
                <label htmlFor="">AC</label>
                <Checkbox label={"food-ac"} />
              </Box> */}
            <Box m={2}>
              <TextField
                type={"number"}
                fullWidth
                id="add-food-cost-ac"
                label="Price: (AC)"
                variant="outlined"
                name="ac_price"
                onChange={onInputChange}
              />
            </Box>
            {/* </div> */}
            <Box m={2}>
              <label htmlFor="">Enter Food Image: </label>
              <input
                // required
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                name="img"
                onChange={onInputChange}
                id="food-img"
              />
            </Box>
            <Box m={2}>
              <Button type={"submit"} variant="contained">
                {submitBtn ? "Adding..." : "Add Food"}
              </Button>
            </Box>
          </form>
        </div>
      </div>
    </div>
  ) : null;
};

export default AddFood;
