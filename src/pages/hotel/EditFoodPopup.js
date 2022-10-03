import React, { useEffect, useState } from "react";
import "./editFoodPopup.scss";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import apis from "../../components/axios/axios";
import { validateFileSize } from "../../services/validateFileSize";
import { fileUpload } from "../../services/fileUpload";
// import axios from '../../components/axios/axios';
// import { baseUrl } from '../../constants/constants';

function EditHotelPopup({ id, trigger, setTrigger, editFood: food }) {
  useEffect(() => {
    fetchFoodCategories();
  }, []);

  const [foodCategories, setFoodCategories] = useState([]);

  let fetchFoodCategories = async () => {
    let { data } = await apis.get("category");
    setFoodCategories(data.categories);
  };

  let [formData, setFormData] = useState();
  let [imgData, setImgData] = useState(null);
  const [submitBtn, setSubmitBtn] = useState(0);

  useEffect(() => {
    myWait();
  }, [imgData]);

  let postWithoutImage = async () => {
    let price = {};
    if (formData.non_ac_price)
      price["non_ac_price"] = Number(formData.non_ac_price);
    if (formData.ac_price) price["ac_price"] = Number(formData.ac_price);
    await apis.put(
      "food",
      {
        ...formData,
        ...price,
        ...(formData.category_id && {
          category_id: formData.category_id.substring(
            0,
            formData.category_id.indexOf(" ")
          ),
          category_name: formData.category_id.substring(
            formData.category_id.indexOf(" ") + 1
          ),
        }),
      },
      {
        headers: {
          "Content-Type": "application/json",
          Token: localStorage.getItem("jwt_admin"),
        },
      }
    );
  };

  let myWait = async () => {
    if (typeof imgData == "string") {
      let price = {};
      if (formData.non_ac_price)
        price["non_ac_price"] = Number(formData.non_ac_price);
      if (formData.ac_price) price["ac_price"] = Number(formData.ac_price);
      await apis.put(
        "food",
        {
          ...formData,
          ...price,
          image: imgData,
          ...(formData.category_id && {
            category_id: formData.category_id.substring(
              0,
              formData.category_id.indexOf(" ")
            ),
            category_name: formData.category_id.substring(
              formData.category_id.indexOf(" ") + 1
            ),
          }),
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
      await postWithoutImage();
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
            <h1>Edit Food Details</h1>
            <div className="add-food-select">
              <FormControl>
                <InputLabel id="choose-catogory">Food Category</InputLabel>
                <Select
                  MenuProps={{
                    disableScrollLock: true,
                  }}
                  labelId="choose-catogory"
                  id="demo-choose-catogory"
                  label="Category"
                  displayEmpty
                  defaultValue={food.category_id + " " + food.category_name}
                  InputLabelProps={{ shrink: true }}
                  onChange={onInputChange}
                  name="category_id"
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
                  labelId="choose-veg-or-non"
                  id="demo-simple-select"
                  label="Veg/Non-Veg"
                  defaultValue={food.is_veg}
                  InputLabelProps={{ shrink: true }}
                  onChange={onInputChange}
                  name="is_veg"
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
                defaultValue={food.name}
                InputLabelProps={{ shrink: true }}
                onChange={onInputChange}
                name="name"
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
                defaultValue={food.description}
                InputLabelProps={{ shrink: true }}
                onChange={onInputChange}
                name="description"
              />
            </Box>
            {/* <div className='add-food-cost-ac-non-ac'>
              <Box m={2}>
                <label htmlFor="">Non-AC</label>
                <Checkbox label={"food-non-ac"} defaultChecked/>
              </Box> */}
            <Box m={2}>
              <TextField
                type={"number"}
                // fullWidth
                id="add-food-cost-non-ac"
                label="Price: (Non-AC)"
                variant="outlined"
                defaultValue={food.non_ac_price}
                InputLabelProps={{ shrink: true }}
                onChange={onInputChange}
                name="non_ac_price"
              />
            </Box>
            {/* <Box m={2}>
                <label htmlFor="">AC</label>
                <Checkbox label={"food-ac"}/>
              </Box> */}
            <Box m={2}>
              <TextField
                type={"number"}
                // fullWidth
                id="add-food-cost-ac"
                label="Price: (AC)"
                variant="outlined"
                defaultValue={food.ac_price}
                InputLabelProps={{ shrink: true }}
                onChange={onInputChange}
                name="ac_price"
              />
            </Box>
            {/* </div> */}
            <Box m={2}>
              <label htmlFor="">Enter Food Image: </label>
              <input
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                name="img"
                onChange={onInputChange}
                id="food-img"
              />
            </Box>
            <Box m={2}>
              <Button type={"submit"} variant="contained">
                {submitBtn ? "Submitting..." : "Submit"}
              </Button>
            </Box>
          </form>
        </div>
      </div>
    </div>
  ) : null;
}

export default EditHotelPopup;
