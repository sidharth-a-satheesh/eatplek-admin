import React, { useEffect, useState } from "react";
import "./addHotelPopup.scss";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import apis from "../../components/axios/axios";
import { fileUpload } from "../../services/fileUpload";
import { validateFileSize } from "../../services/validateFileSize";

function EditHotelPopup({ trigger, setTrigger, hotel }) {
  const [image, setImage] = useState(null);
  const [dineIn, setDineIn] = useState(false);
  const [takeAway, setTakeAway] = useState(false);
  const [veg, setVeg] = useState(false);
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
  const [ac, setAc] = useState(false);
  const [non_ac, setNonAc] = useState(false);

  const handleAc = (e) => {
    setAc(e.target.checked);
    console.log("AC : " + e.target.checked);
  };
  const handleNonAc = (e) => {
    setNonAc(e.target.checked);
    console.log("NON-AC : " + e.target.checked);
  };

  let findDay = (day) => {
    for (let i = 0; i < hotel.days_open.length; i++) {
      if (hotel.days_open[i] === day) return true;
    }
    return false;
  };

  useEffect(() => {
    if (hotel.id) {
      setFormData({
        name: hotel.name,
        location: hotel.location,
        latitude: hotel.geo_location?.latitude,
        longitude: hotel.geo_location?.longitude,
        phone: hotel.phone,
        email: hotel.email,
        password: hotel.password,
        username: hotel.username,
        maximum_no_of_guests: hotel.maximum_no_of_guests,
        days_open: hotel.days_open,
        opening_time: hotel.opening_time,
        closing_time: hotel.closing_time,
        type: hotel.type,
        image: hotel.image,
      });
      setDays({
        Mon: findDay("Monday"),
        Tue: findDay("Tuesday"),
        Wed: findDay("Wednesday"),
        Thu: findDay("Thursday"),
        Fri: findDay("Friday"),
        Sat: findDay("Saturday"),
        Sun: findDay("Sunday"),
      });
      setDineIn(hotel.dine_in);
      setTakeAway(hotel.take_away);
      setVeg(hotel.isveg);
      setAc(hotel.ac);
      setNonAc(hotel.non_ac);
    }
    console.log(hotel);
  }, [hotel]);

  useEffect(() => {
    myWait();
  }, [image]);

  let post1 = async () => {
    // console.log(typeof formData.latitude);
    await apis.put(
      "restaurant/" + hotel.id,
      {
        ...formData,
        ...(formData &&
          formData.maximum_no_of_guests && {
            maximum_no_of_guests: Number(formData.maximum_no_of_guests),
          }),
        geo_location: {
          latitude: `${formData.latitude}`,
          longitude: `${formData.longitude}`,
        },
        dine_in: Boolean(dineIn),
        take_away: Boolean(takeAway),
        isveg: Boolean(veg),
        days_open: [
          ...(days.Mon ? ["Monday"] : []),
          ...(days.Tue ? ["Tuesday"] : []),
          ...(days.Wed ? ["Wednesday"] : []),
          ...(days.Thu ? ["Thursday"] : []),
          ...(days.Fri ? ["Friday"] : []),
          ...(days.Sat ? ["Saturday"] : []),
          ...(days.Sun ? ["Sunday"] : []),
        ],
        ac: Boolean(ac),
        non_ac: Boolean(non_ac),
      },
      {
        headers: {
          "Content-Type": "application/json",
          Token: localStorage.getItem("jwt_admin"),
        },
      }
    );
  };

  let post2 = async () => {
    await apis.put(
      "restaurant/" + hotel.id,
      {
        ...formData,
        ...(formData &&
          formData.maximum_no_of_guests && {
            maximum_no_of_guests: Number(formData.maximum_no_of_guests),
          }),
        image: `${image}`,
        dine_in: Boolean(dineIn),
        take_away: Boolean(takeAway),
        isveg: Boolean(veg),
        geo_location: {
          latitude: `${formData.latitude}`,
          longitude: `${formData.longitude}`,
        },
        days_open: [
          ...(days.Mon ? ["Monday"] : []),
          ...(days.Tue ? ["Tuesday"] : []),
          ...(days.Wed ? ["Wednesday"] : []),
          ...(days.Thu ? ["Thursday"] : []),
          ...(days.Fri ? ["Friday"] : []),
          ...(days.Sat ? ["Saturday"] : []),
          ...(days.Sun ? ["Sunday"] : []),
        ],
        ac: Boolean(ac),
        non_ac: Boolean(non_ac),
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
    if (image && typeof image == "string") {
      await post2();
      window.location.reload(true);
    }
  };

  const postData = async (e) => {
    e.preventDefault();
    setSubmitBtn(1);
    if (image) {
      let img = await fileUpload(image);
      setImage(img);
    } else {
      await post1();
      window.location.reload(true);
    }
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
  };
  const handleVeg = (e) => {
    setVeg(e.target.checked);
  };
  const handleTakeAway = (e) => {
    setTakeAway(e.target.checked);
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
            <h1>Edit Hotel Details</h1>
            <Box m={1}>
              <TextField
                type={"text"}
                fullWidth
                id="add-hotel-name"
                label="Hotel Name"
                variant="outlined"
                name="name"
                onChange={onInputChange}
                defaultValue={hotel.name}
                InputLabelProps={{ shrink: true }}
              />
            </Box>
            <div className="edit-hotel-loaction">
              <Box m={1}>
                <TextField
                  type={"text"}
                  fullWidth
                  id="add-hotel-location"
                  label="Location"
                  variant="outlined"
                  name="location"
                  onChange={onInputChange}
                  defaultValue={hotel.location}
                  InputLabelProps={{ shrink: true }}
                />
              </Box>
              <Box m={1}>
                <TextField
                  type={"number"}
                  inputProps={{ step: "any" }}
                  fullWidth
                  id="add-hotel-latitude"
                  label="Latitude"
                  variant="outlined"
                  name="latitude"
                  onChange={onInputChange}
                  defaultValue={Number(hotel.geo_location?.latitude)}
                  InputLabelProps={{ shrink: true }}
                />
              </Box>
              <Box m={1}>
                <TextField
                  type={"number"}
                  inputProps={{ step: "any" }}
                  fullWidth
                  id="add-hotel-longitude"
                  label="Longitude"
                  variant="outlined"
                  name="longitude"
                  onChange={onInputChange}
                  defaultValue={Number(hotel.geo_location?.longitude)}
                  InputLabelProps={{ shrink: true }}
                />
              </Box>
            </div>
            <Box m={1}>
              <TextField
                type={"text"}
                fullWidth
                multiline
                id="add-hotel-food-type"
                label="Food Type"
                variant="outlined"
                name="type"
                onChange={onInputChange}
                defaultValue={hotel.type}
                InputLabelProps={{ shrink: true }}
              />
            </Box>
            <div className="add-hotel-username-pass">
              <Box m={1}>
                <TextField
                  type={"text"}
                  fullWidth
                  id="add-hotel-number"
                  label="Phone Number"
                  variant="outlined"
                  name="phone"
                  onChange={onInputChange}
                  defaultValue={hotel.phone}
                  InputLabelProps={{ shrink: true }}
                />
              </Box>
              <Box m={1}>
                <TextField
                  type={"email"}
                  fullWidth
                  id="add-hotel-email"
                  label="Email"
                  variant="outlined"
                  name="email"
                  onChange={onInputChange}
                  defaultValue={hotel.email}
                  InputLabelProps={{ shrink: true }}
                />
              </Box>
              <Box m={1}>
                <TextField
                  type={"text"}
                  fullWidth
                  id="add-hotel-username"
                  label="Hotel User Name"
                  variant="outlined"
                  name="username"
                  onChange={onInputChange}
                  defaultValue={hotel.username}
                  InputLabelProps={{ shrink: true }}
                />
              </Box>
              <Box m={1}>
                <TextField
                  fullWidth
                  type={"password"}
                  id="add-hotel-password"
                  label="Hotel Password"
                  variant="outlined"
                  name="password"
                  onChange={onInputChange}
                  defaultValue={hotel.password}
                  disabled
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Box>

              <Box m={1}>
                <label htmlFor="">Enter Hotel Image: </label>
                <input
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  name="img"
                  onChange={handleImage}
                  id="hotel-img"
                />
              </Box>
              <Box m={1}>
                <TextField
                  fullWidth
                  type={"number"}
                  id="add-hotel-count"
                  label="Total Guest Count"
                  variant="outlined"
                  name="maximum_no_of_guests"
                  onChange={onInputChange}
                  defaultValue={hotel.maximum_no_of_guests}
                  InputLabelProps={{ shrink: true }}
                />
              </Box>
            </div>
            <Box ml={1}>
              Choose Working Days:
              <label> Mon </label>
              <Checkbox
                onChange={() => setDays((pd) => ({ ...pd, Mon: !pd.Mon }))}
                checked={days.Mon}
              />
              <label>Tue </label>
              <Checkbox
                onChange={() => setDays((pd) => ({ ...pd, Tue: !pd.Tue }))}
                checked={days.Tue}
              />
              <label>Wed </label>
              <Checkbox
                onChange={() => setDays((pd) => ({ ...pd, Wed: !pd.Wed }))}
                checked={days.Wed}
              />
              <label>Thu </label>
              <Checkbox
                onChange={() => setDays((pd) => ({ ...pd, Thu: !pd.Thu }))}
                checked={days.Thu}
              />
              <label>Fri </label>
              <Checkbox
                onChange={() => setDays((pd) => ({ ...pd, Fri: !pd.Fri }))}
                checked={days.Fri}
              />
              <label>Sat </label>
              <Checkbox
                onChange={() => setDays((pd) => ({ ...pd, Sat: !pd.Sat }))}
                checked={days.Sat}
              />
              <label>Sun </label>
              <Checkbox
                onChange={() => setDays((pd) => ({ ...pd, Sun: !pd.Sun }))}
                checked={days.Sun}
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
                  onChange={onInputChange}
                  defaultValue={hotel.opening_time}
                  InputLabelProps={{ shrink: true }}
                />
                <label> Closing Time: </label>
                <input
                  type="time"
                  name="closing_time"
                  onChange={onInputChange}
                  defaultValue={hotel.closing_time}
                  InputLabelProps={{ shrink: true }}
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
              <Checkbox
                label={"non_ac"}
                checked={non_ac}
                onChange={handleNonAc}
              />
            </Box>

            <Box ml={1}>
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
