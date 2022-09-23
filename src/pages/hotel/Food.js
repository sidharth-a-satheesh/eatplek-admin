import React, {useState} from 'react'
import './food.scss'
import image from '../../assets/food.png'
const Food = ({name,cost,description,imgPath}) => {
  const [readMore, setReadMore] = useState(false);
  const toggleBtn = () => {
    setReadMore((prevState) => !prevState);
  };
  return (
    <div className='food-details-main'>
        <div className='food-img-main'><img className='food-image' src={image} alt="" /></div>
        <h2>{name}</h2>
        <h2 style={{color: "navy"}}>Rs. {cost}</h2>
        {readMore ? description : description.substring(0,50) + "..."}
            <button className="read-more-btn" onClick={toggleBtn}>
              {readMore ? "Read Less" : "Read More"}
            </button>
    </div>
  )
}

export default Food