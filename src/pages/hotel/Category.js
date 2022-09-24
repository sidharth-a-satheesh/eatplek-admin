import React, { useState } from "react";
import "./category.scss";
import Button from "@mui/material/Button";
import AddCategory from "./AddCategory";

const Category = ({ catName }) => {
  const [addCategoryPopup, setCategoryPopup] = useState(false);
  return (
    <div>
      <div className="individual-category-main">
        <div>
          <h2>{catName}</h2>
        </div>

        <div>
          <Button onClick={() => setCategoryPopup(true)} variant="contained">
            Edit
          </Button>
        </div>
        <div>
          <Button variant="contained" color="error" >
            Delete
          </Button>
        </div>
      </div>
      <div>
        <AddCategory trigger={addCategoryPopup} setTrigger={setCategoryPopup} />
      </div>
    </div>
  );
};

export default Category;
