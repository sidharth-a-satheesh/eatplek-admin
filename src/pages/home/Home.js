import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.scss";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import DashHotels from "./DashHotels";
import AddHotelPopup from "./AddHotelPopup";
// import { baseUrl, API_KEY } from "../../constants/constants";
import EditHotelPopup from "./EditHotelPopup";
import DeleteHotelPopUp from "./DeleteHotelPopUp";
import apis from "../../components/axios/axios";

const Home = () => {
  const [duplicateData, setDuplicateData] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    apis.get("restaurant/all").then((response) => {
      console.log(response.data.restaurants);
      setData(response.data.restaurants);
      setDuplicateData(response.data.restaurants);
    });
  }, []);

  const viewAll = () => {
    setData(duplicateData);
  };
  const viewDineIn = () => {
    const result = duplicateData.filter((e) => {
      return e.dine_in === true;
    });
    setData(result);
  };
  const viewTakeAway = () => {
    const result = duplicateData.filter((e) => {
      return e.take_away === true;
    });
    setData(result);
  };

  const [addHotelPopup, setAddHotelPopup] = useState(false);
  const [editHotelPopup, setEditHotelPopup] = useState(false);
  const [deleteHotelPopup, setDeleteHotelPopup] = useState(false);
  const [deleteHotelId, setDeleteHotelId] = useState("");
  const [editHotel, setEditHotel] = useState("");

  // const update = (id) =>{
  //   console.log(id)
  // }

  const deletehotel = (id) => {
    setDeleteHotelPopup(true);
    setDeleteHotelId(id);
  };

  const edithotel = (hotel) => {
    setEditHotelPopup(true);
    setEditHotel(hotel);
  };

  return (
    <div className="home-main">
      <div className="add-hotels-btn">
        <Button onClick={() => setAddHotelPopup(true)} variant="contained">
          Add Hotel
        </Button>
      </div>
      <FormControl>
        <RadioGroup
          defaultValue={"all"}
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            control={<Radio />}
            value="all"
            label="All"
            onClick={viewAll}
          />
          <FormControlLabel
            value="dine-in"
            control={<Radio />}
            label="Dine In"
            onClick={viewDineIn}
          />
          <FormControlLabel
            value="take-away"
            control={<Radio />}
            label="Take Away"
            onClick={viewTakeAway}
          />
        </RadioGroup>
      </FormControl>
      <div className="dash-items">
        {data && data.map((e) => (
          <div key={e.id}>
            <Link to={`/hotel/${e.id}`}>
              <DashHotels
                name={e.name}
                location={e.location}
                foodType={e.type}
                hotel_img={e.image}
              />
            </Link>
            <div className="hotel-main-btns">
              <Box m={2}>
                {/* <Button onClick={()=>setEditHotelPopup(true)}  variant="contained">EDIT HOTEL</Button> */}
                <Button onClick={() => edithotel(e)} variant="contained">
                  EDIT HOTEL
                </Button>
              </Box>
              <Box m={2}>
                <Button
                  variant="contained"
                  onClick={() => deletehotel(e.id)}
                  color="error"
                >
                  DELETE HOTEL
                </Button>
              </Box>
            </div>
          </div>
        ))}
      </div>
      {/* <div className='add-hotels-popup-main'>
        <div className='add-hotels-popup'>
          
        </div>
      </div> */}
      <EditHotelPopup
        trigger={editHotelPopup}
        setTrigger={setEditHotelPopup}
        hotel={editHotel}
      />
      <DeleteHotelPopUp
        id={deleteHotelId}
        trigger={deleteHotelPopup}
        setTrigger={setDeleteHotelPopup}
      />
      <AddHotelPopup trigger={addHotelPopup} setTrigger={setAddHotelPopup} />
    </div>
  );
};

export default Home;
