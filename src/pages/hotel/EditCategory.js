import React, { useEffect, useState } from "react";
import Category from "./Category";
import "./editCategory.scss";
import { Button } from "@mui/material";
import AddCategory from "./AddCategory";
import apis from "../../components/axios/axios";

const EditCategory = () => {
  useEffect(() => {
    fetchCtgries();
  }, []);

  let [ctgries, setCtgries] = useState([]);
  let [delId, setDelId] = useState(null);

  let fetchCtgries = async () => {
    let { data } = await apis.get("category");
    // console.log(data);
    setCtgries(data.categories);
  };

  const [addCategoryPopup, setCategoryPopup] = useState(false);
  return (
    <div className="edit-category-main">
      <h1>Edit Categories</h1>
      {/* <hr /> */}
      {ctgries.map((e) => (
        <Category key={e.id} catName={e.name} id={e.id} />
      ))}
      <div className="add-category-main-btn">
        <Button
          onClick={() => setCategoryPopup(true)}
          color="success"
          variant="contained"
        >
          Add category
        </Button>
      </div>
      <AddCategory trigger={addCategoryPopup} setTrigger={setCategoryPopup} />
    </div>
  );
};

export default EditCategory;
