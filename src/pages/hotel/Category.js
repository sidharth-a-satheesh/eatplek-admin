import React, { useState } from "react";
import "./category.scss";
import Button from "@mui/material/Button";
import AddCategory from "./AddCategory";
import DeleteCategoryPopUp from "./DeleteCategoryPopup";
import EditCategoryPopup from "./EditCategoryPopup";

const Category = ({ catName, id }) => {
  const [addCategoryPopup, setCategoryPopup] = useState(false);
  const [deleteCategoryPopUp, setDeleteCategoryPopUp] = useState(false);
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
          <Button
            variant="contained"
            color="error"
            onClick={() => setDeleteCategoryPopUp(true)}
          >
            Delete
          </Button>
        </div>
      </div>
      <div>
        <EditCategoryPopup
          trigger={addCategoryPopup}
          setTrigger={setCategoryPopup}
          id={id}
          catName={catName}
        />
        <DeleteCategoryPopUp
          trigger={deleteCategoryPopUp}
          setTrigger={setDeleteCategoryPopUp}
          delId={id}
        />
      </div>
    </div>
  );
};

export default Category;
