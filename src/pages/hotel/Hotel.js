import React, { useState } from 'react'
import './hotel.scss'
import Button from '@mui/material/Button'
import AddCategory from './AddCategory';
import AddFood from './AddFood';

const Hotel = () => {
    const [addFoodPopup, setFoodPopup] = useState(false);
    const [addCategoryPopup, setCategoryPopup] = useState(false)
  return (
    <div className='hotel-inside-main'>
        <div className="hotel-inside-name">
            <h1>The Smocky Shack</h1>
        </div>
            <div className="hotel-inside-btn-sec">
                <div className="hotel-inside-add-category">
                    <Button onClick={()=>setCategoryPopup(true)} variant="contained">Add New Category</Button>
                </div>
                <div className="hotel-inside-add-food">
                    <Button onClick={()=>setFoodPopup(true)} variant="contained" color={"success"}>Add New Food</Button>
                </div>
            </div>
            {/* <AddCategory trigger={addCategoryPopup} setTrigger={setCategoryPopup}/>
            <AddFood trigger={addFoodPopup} setTrigger={setFoodPopup}/> */}
    </div>
  )
}

export default Hotel