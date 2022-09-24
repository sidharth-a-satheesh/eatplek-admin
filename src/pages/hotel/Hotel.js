import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./hotel.scss";
import Button from "@mui/material/Button";
import AddCategory from "./AddCategory";
import AddFood from "./AddFood";
import Food from "./Food";
import { Box } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import DeleteFoodPopUp from "./DeleteFoodPopUp";
import EditFoodPopup from "./EditFoodPopup";
import apis from "../../components/axios/axios";
import { useNavigate, useParams } from "react-router-dom";

const Hotel = () => {
  const { id } = useParams();

  useEffect(() => {
    fetchFood();
    fetchRestaurant();
  }, []);

  let [food, setFood] = useState([]); // Food under every category
  let [foodItems, setFoodItems] = useState([]); // All food items
  let [filteredFoodItems, setFilteredFoodItems] = useState([]);
  let [restaurant, setRestaurant] = useState(null);
  let [selectedCtgryId, setSelectedCtgryId] = useState("All");

  let fetchRestaurant = async () => {
    let { data } = await apis.get("restaurant/" + id);
    setRestaurant(data.restaurant);
  };

  let fetchFood = async () => {
    let { data } = await apis.get("food/filter/restaurant/" + id);
    console.log(data);
    setFood(data.foods);
    let allFood = [];
    for (let i = 0; i < data.foods.length; i++) {
      if (!data.foods[i].foods || data.foods[i].foods.length === 0) continue;
      allFood = [...allFood, ...data.foods[i].foods];
    }
    setFoodItems(allFood);
    setFilteredFoodItems(allFood);
  };

  let onCtrgySelect = (id) => {
    setSelectedCtgryId(id);
    if (id === "All") setFilteredFoodItems(foodItems);
    else setFilteredFoodItems(foodItems.filter((i) => i.category_id === id));
  };

  const [addFoodPopup, setFoodPopup] = useState(false);
  const [editFoodPopup, setEditFoodPopup] = useState(false);
  const [deleteFoodPopup, setDeleteFoodPopup] = useState(false);
  const [addCategoryPopup, setCategoryPopup] = useState(false);

  if (!restaurant) return null;
  return (
    <div className="hotel-inside-main">
      <div className="hotel-inside-name">
        <h1>{restaurant.name}</h1>
      </div>
      <div className="hotel-inside-btn-sec">
        <div className="hotel-inside-ac-non-ac">
          {/* <Button onClick={()=>setCategoryPopup(true)} variant="contained">Add New Category</Button> */}
          <FormControl>
            <RadioGroup
              defaultValue={"ac"}
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="ac" control={<Radio />} label="AC" />
              <FormControlLabel
                value="non-ac"
                control={<Radio />}
                label="Non-AC"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="hotel-inside-add-food">
          <Button
            onClick={() => setFoodPopup(true)}
            variant="contained"
            color={"success"}
          >
            Add New Food
          </Button>
        </div>
      </div>
      <AddCategory trigger={addCategoryPopup} setTrigger={setCategoryPopup} />
      <AddFood trigger={addFoodPopup} setTrigger={setFoodPopup} />
      <div className="flex-space-between">
        <div className="hotel-inside-food-category">
          <div
            className={`fd-category ${selectedCtgryId === "All" && "active"}`}
            onClick={() => onCtrgySelect("All")}
          >
            All
          </div>
          {food &&
            food.map((e) => (
              <div
                key={e.category_id}
                className={`fd-category ${
                  selectedCtgryId === e.category_id && "active"
                }`}
                onClick={() => onCtrgySelect(e.category_id)}
              >
                {e.category_name}
              </div>
            ))}
          <Link to={"/edit-category"}>
            <Button variant="contained">Edit Categories</Button>
          </Link>
        </div>
        <div></div>
      </div>
      {/* <div className="hotel-inside-food-section-main">
                    {
                        foodCategory.map((e)=>(
                        <div key={e.id} className="hotel-inside-food-section">
                            {e.food.map((a)=>
                                <div key={a.food_id}>
                                    <Food
                                        name={a.foodName}
                                        cost={a.foodCost}
                                        description={a.description}
                                        imgPath={a.imagePath}
                                    />
                                    <div className="food-main-btns">
                                        <Box m={2}>
                                            <Button onClick={()=>setEditFoodPopup(true)}  variant="contained">EDIT FOOD</Button>
                                            
                                        </Box>
                                        <Box m={2}>
                                            <Button variant="contained" onClick={()=>setDeleteFoodPopup(true)} color="error">DELETE FOOD</Button>
                                        </Box>
                                    </div>
                                    
                                </div>
                            )}
                        </div>
                    
                        ))
                    }
                </div> */}
      <div className="hotel-inside-food-section-main">
        <div className="hotel-inside-food-section">
          {filteredFoodItems.map((a) => (
            <div key={a._id}>
              <Food
                name={a.name}
                cost={a.non_ac_price}
                description={a.description}
                imgPath={a.image}
              />
              <div className="food-main-btns">
                <Box m={1}>
                  <Button
                    size="small"
                    onClick={() => setEditFoodPopup(true)}
                    variant="contained"
                  >
                    EDIT FOOD
                  </Button>
                </Box>
                <Box m={1}>
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => setDeleteFoodPopup(true)}
                    color="error"
                  >
                    DELETE FOOD
                  </Button>
                </Box>
              </div>
            </div>
          ))}
        </div>
      </div>
      <DeleteFoodPopUp
        trigger={deleteFoodPopup}
        setTrigger={setDeleteFoodPopup}
      />
      <EditFoodPopup trigger={editFoodPopup} setTrigger={setEditFoodPopup} />
    </div>
  );
};

export default Hotel;
