import React, { useEffect, useState } from "react";
import "./addHotelPopup.scss";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import apis from "../../components/axios/axios";
import { fileUpload } from "../../services/fileUpload";
import { validateFileSize } from "../../services/validateFileSize";

function AddHotelPopup({ trigger, setTrigger }) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [number, setNumber] = useState("");
  const [foodType, setFoodType] = useState("");
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [image, setImage] = useState(null);
  const [email, setEmail] = useState(null);
  const [dineIn, setDineIn] = useState(false);
  const [takeAway, setTakeAway] = useState(false);
  const [veg, setVeg] = useState(false);
  const [ac, setAc] = useState(false);
  const [non_ac, setNonAc] = useState(false);
  const [submitBtn, setSubmitBtn] = useState(0);
  let [formData, setFormData] = useState({});
  let [days, setDays] = useState({
    Mon: false,
    Tue: false,
    Wed: false,
    Thu: false,
    Fri: false,
    Sat: false,
    Sun: false,
  });

  useEffect(() => {
    myWait();
  }, [image]);

  let myWait = async () => {
    if (typeof image == "string") {
      await apis.post(
        "restaurant",
        {
          ...formData,
          maximum_no_of_guests: Number(formData.maximum_no_of_guests),
          email: email,
          name: `${name}`,
          location: `${location}`,
          phone: `${number}`,
          type: `${foodType}`,
          image: `${image}`,
          dine_in: Boolean(dineIn),
          take_away: Boolean(takeAway),
          username: `${user}`,
          password: `${pass}`,
          isveg: Boolean(veg),
          ac: Boolean(ac),
          non_ac: Boolean(non_ac),
          days_open: [
            ...(days.Mon ? ["Monday"] : []),
            ...(days.Tue ? ["Tuesday"] : []),
            ...(days.Wed ? ["Wednesday"] : []),
            ...(days.Thu ? ["Thursday"] : []),
            ...(days.Fri ? ["Friday"] : []),
            ...(days.Sat ? ["Saturday"] : []),
            ...(days.Sun ? ["Sunday"] : []),
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Token: localStorage.getItem("jwt_admin"),
          },
        }
      );
      window.location.reload(true);
    }
  };

  const postData = async (e) => {
    e.preventDefault();
    setSubmitBtn(1);
    let img = await fileUpload(image);
    setImage(img);
  };

  let onInputChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    validateFileSize(e.target.files[0]);
    setImage(e.target.files[0]);
  };
  const handleDineIn = (e) => {
    setDineIn(e.target.checked);
    console.log("Dine In : " + e.target.checked);
  };
  const handleVeg = (e) => {
    setVeg(e.target.checked);
    console.log("Veg : " + e.target.checked);
  };
  const handleAc = (e) => {
    setAc(e.target.checked);
    console.log("AC : " + e.target.checked);
  };
  const handleNonAc = (e) => {
    setNonAc(e.target.checked);
    console.log("NON-AC : " + e.target.checked);
  };
  const handleTakeAway = (e) => {
    setTakeAway(e.target.checked);
    console.log("Take Away : " + e.target.checked);
  };

  return trigger ? (
    <div className="add-hotels-popup-main">
      <div className="add-hotels-popup">
        <div
          onClick={() => setTrigger(false)}
          className="add-hotels-popup-close-btn"
        >
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div className="add-hotel-form">
          <form onSubmit={postData}>
            <h1>Enter Hotel Details</h1>
            <Box m={1}>
              <TextField
                type={"text"}
                required
                fullWidth
                id="add-hotel-name"
                label="Hotel Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Box>
            <Box m={1}>
              <TextField
                type={"text"}
                required
                fullWidth
                id="add-hotel-location"
                label="Location"
                variant="outlined"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Box>
            <Box m={1}>
              <TextField
                type={"text"}
                required
                fullWidth
                multiline
                id="add-hotel-food-type"
                label="Food Type"
                variant="outlined"
                value={foodType}
                onChange={(e) => setFoodType(e.target.value)}
              />
            </Box>
            <div className="add-hotel-username-pass">
              <Box m={1}>
                <TextField
                  type={"text"}
                  required
                  fullWidth
                  id="add-hotel-number"
                  label="Phone Number"
                  variant="outlined"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </Box>
              <Box m={1}>
                <TextField
                  type={"email"}
                  required
                  fullWidth
                  id="add-hotel-email"
                  label="Email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>

              <Box m={1}>
                <TextField
                  type={"text"}
                  required
                  fullWidth
                  id="add-hotel-username"
                  label="Hotel User Name"
                  variant="outlined"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                />
              </Box>
              <Box m={1}>
                <TextField
                  required
                  fullWidth
                  type={"password"}
                  id="add-hotel-password"
                  label="Hotel Password"
                  variant="outlined"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
              </Box>

              <Box m={1}>
                <label htmlFor="">Enter Hotel Image: </label>
                <input
                  required
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  name="img"
                  onChange={handleImage}
                  id="hotel-img"
                />
              </Box>
              <Box m={1}>
                <TextField
                  required
                  fullWidth
                  type={"number"}
                  id="add-hotel-count"
                  label="Total Guest Count"
                  variant="outlined"
                  name="maximum_no_of_guests"
                  value={formData.maximum_no_of_guests}
                  onChange={onInputChange}
                />
              </Box>
            </div>
            <Box ml={1}>
              Choose Working Days:
              <label> Mon </label>
              <Checkbox
                onChange={() => setDays((pd) => ({ ...pd, Mon: !pd.Mon }))}
              />
              <label>Tue </label>
              <Checkbox
                onChange={() => setDays((pd) => ({ ...pd, Tue: !pd.Tue }))}
              />
              <label>Wed </label>
              <Checkbox
                onChange={() => setDays((pd) => ({ ...pd, Wed: !pd.Wed }))}
              />
              <label>Thu </label>
              <Checkbox
                onChange={() => setDays((pd) => ({ ...pd, Thu: !pd.Thu }))}
              />
              <label>Fri </label>
              <Checkbox
                onChange={() => setDays((pd) => ({ ...pd, Fri: !pd.Fri }))}
              />
              <label>Sat </label>
              <Checkbox
                onChange={() => setDays((pd) => ({ ...pd, Sat: !pd.Sat }))}
              />
              <label>Sun </label>
              <Checkbox
                onChange={() => setDays((pd) => ({ ...pd, Sun: !pd.Sun }))}
              />
            </Box>
            <Box>
              <Box ml={1}>
                <label htmlFor="">Dine In</label>
                <Checkbox
                  label={"dine-in"}
                  checked={dineIn}
                  onChange={handleDineIn}
                />
                <label htmlFor="">Take Away</label>
                <Checkbox
                  label={"take-away"}
                  checked={takeAway}
                  onChange={handleTakeAway}
                />

                <label> Opening Time: </label>
                <input
                  type="time"
                  name="opening_time"
                  required
                  onChange={onInputChange}
                />
                <label> Closing Time: </label>
                <input
                  type="time"
                  name="closing_time"
                  required
                  onChange={onInputChange}
                />
              </Box>
            </Box>
            <Box ml={1}>
              <label htmlFor="">Veg</label>
              <Checkbox label={"veg"} checked={veg} onChange={handleVeg} />
            </Box>
            <Box ml={1}>
              <label htmlFor="">AC</label>
              <Checkbox label={"ac"} checked={ac} onChange={handleAc} />
              <label htmlFor="">Non AC</label>
              <Checkbox label={"non_ac"} checked={non_ac} onChange={handleNonAc} />
            </Box>
            <Box ml={1}>
              <Button type={"submit"} variant="contained">
                {submitBtn ? "Adding..." : "Add Hotel"}
              </Button>
            </Box>
          </form>
        </div>
      </div>
    </div>
  ) : null;
}

export default AddHotelPopup;
