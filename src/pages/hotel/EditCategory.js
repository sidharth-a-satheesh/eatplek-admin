import React, {useState} from 'react'
import Category from './Category'
import './editCategory.scss'
import { Button } from '@mui/material'
import AddCategory from './AddCategory'

const EditCategory = () => {
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
    const [addCategoryPopup, setCategoryPopup] = useState(false);
  return (
    <div className='edit-category-main'>
        
        <h1>Edit Category</h1>
        {/* <hr /> */}
        {
            foodCategory.map((e)=>
                <Category key={e.id} catName={e.categoryName} />
            )
        }
        <div className='add-category-main-btn'>
            <Button onClick={()=>setCategoryPopup(true)} color="success" variant="contained">Add category</Button>
        </div>
        <AddCategory trigger={addCategoryPopup} setTrigger={setCategoryPopup}/>
    </div>  
  )
}

export default EditCategory