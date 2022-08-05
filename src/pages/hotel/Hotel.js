import React, { useState } from 'react'
import './hotel.scss'
import Button from '@mui/material/Button'
import AddCategory from './AddCategory';
import AddFood from './AddFood';
import Food from './Food';



const Hotel = () => {
    var foodCategory = [
        {
            id: 1,
            categoryName: "Pizza",
            foodTypes: 4,
            food:[
                {
                    food_id: 1,
                    foodName: "Cheese Pizza",
                    foodCost: 280,
                    imagePath: "../../assets/food.png",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    food_id: 2,
                    foodName: "Barbique Pizza",
                    foodCost: 230,
                    imagePath: "../../assets/food.png",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    food_id: 3,
                    foodName: "Hariyali Pizza",
                    foodCost: 250,
                    imagePath: "../../assets/food.png",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    food_id: 4,
                    foodName: "Veg Pizza",
                    foodCost: 200,
                    imagePath: "../../assets/food.png",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
            ]
        },
        {
            id: 2,
            categoryName: "Biriyani",
            foodTypes: 3,
            food:[
                {
                    food_id: 1,
                    foodName: "Chicken Biriyani",
                    foodCost: 180,
                    imagePath: "../../assets/food.png",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    food_id: 2,
                    foodName: "Veg Biriyani",
                    foodCost: 130,
                    imagePath: "../../assets/food.png",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    food_id: 3,
                    foodName: "Beef Biriyani",
                    foodCost: 190,
                    imagePath: "../../assets/food.png",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
            ]
        },
    ]
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
            <AddCategory trigger={addCategoryPopup} setTrigger={setCategoryPopup}/>
            <AddFood trigger={addFoodPopup} setTrigger={setFoodPopup}/>
            <div className="flex-space-between">
                
                <div className='hotel-inside-food-category'>
                    <div className="fd-category" >All</div>
                    {
                        foodCategory.map((e)=>
                            <div key={e.id} className="fd-category" >{e.categoryName}</div>
                        )
                    }
                </div>
                <div>
                    <form action="">
                        <select name="hotel-ac-selection" id="hotel-ac-selection">
                            <option value="non-ac">Non-AC</option>
                            <option value="ac">AC</option>
                        </select>
                    </form>
                </div>
            </div>
                <div className="hotel-inside-food-section-main">
                    {
                        foodCategory.map((e)=>
                        <div key={e.id} className="hotel-inside-food-section">
                            {e.food.map((a)=>
                                <Food
                                    key={a.food_id}
                                    name={a.foodName}
                                    cost={a.foodCost}
                                    description={a.description}
                                    imgPath={a.imagePath}
                                />
                            )}
                        </div>
                    
                        )
                    }
                </div>
            
    </div>
  )
}

export default Hotel