import React from 'react'
import './messages.scss'

import IndividualMsg from './IndividualMsg'


const Messages = () => {
  const messages=[
    {
      id:1,
      food: "Shawarma",
      hotel: "Cita Pani",
      price: 90,
      description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum ducimus nobis quo asperiores. Tempora at debitis ex tempore modi rerum officia accusantium, distinctio assumenda, facere sint praesentium quia, enim culpa.Quae nulla itaque provident molestiae? Animi fugiat, dolorem minima ab quas odio consequuntur illo! Aliquid est at error necessitatibus tenetur voluptatem, nobis facilis, molestias doloremque in, atque placeat magnam provident!Quasi saepe dignissimos in modi quia. Eum dolorem, autem necessitatibus cum deleniti aperiam voluptatum, vel, hic nihil earum sint repudiandae laborum? Sint minima iusto fuga nam doloremque aliquid. Facilis, nisi!Veritatis vel, voluptate nostrum aliquid minus repellat eveniet, neque ratione libero blanditiis enim eligendi, adipisci eaque expedita eum unde facere. Ipsam similique id nobis perferendis officiis vero beatae voluptatibus facilis?Cum quae facere, iure quia facilis ex aspernatur amet animi nam soluta quos fugit sunt voluptatum delectus quod eius corporis neque sapiente rem at libero earum dolorem culpa quibusdam? Culpa!",
      date: "12/09/2022",
      time: "05:00 PM"
    },
    {
      id:2,
      food: "Alfham",
      hotel: "Marabi",
      price: 150,
      description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum ducimus nobis quo asperiores. Tempora at debitis ex tempore modi rerum officia accusantium, distinctio assumenda, facere sint praesentium quia, enim culpa.Quae nulla itaque provident molestiae? Animi fugiat, dolorem minima ab quas odio consequuntur illo! Aliquid est at error necessitatibus tenetur voluptatem, nobis facilis, molestias doloremque in, atque placeat magnam provident!Quasi saepe dignissimos in modi quia. Eum dolorem, autem necessitatibus cum deleniti aperiam voluptatum, vel, hic nihil earum sint repudiandae laborum? Sint minima iusto fuga nam doloremque aliquid. Facilis, nisi!Veritatis vel, voluptate nostrum aliquid minus repellat eveniet, neque ratione libero blanditiis enim eligendi, adipisci eaque expedita eum unde facere. Ipsam similique id nobis perferendis officiis vero beatae voluptatibus facilis?Cum quae facere, iure quia facilis ex aspernatur amet animi nam soluta quos fugit sunt voluptatum delectus quod eius corporis neque sapiente rem at libero earum dolorem culpa quibusdam? Culpa!",
      date: "12/09/2022",
      time: "05:00 PM"
    },
    {
      id:3,
      food: "Shawayi",
      hotel: "Cita Pani",
      price: 180,
      description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum ducimus nobis quo asperiores. Tempora at debitis ex tempore modi rerum officia accusantium, distinctio assumenda, facere sint praesentium quia, enim culpa.Quae nulla itaque provident molestiae? Animi fugiat, dolorem minima ab quas odio consequuntur illo! Aliquid est at error necessitatibus tenetur voluptatem, nobis facilis, molestias doloremque in, atque placeat magnam provident!Quasi saepe dignissimos in modi quia. Eum dolorem, autem necessitatibus cum deleniti aperiam voluptatum, vel, hic nihil earum sint repudiandae laborum? Sint minima iusto fuga nam doloremque aliquid. Facilis, nisi!Veritatis vel, voluptate nostrum aliquid minus repellat eveniet, neque ratione libero blanditiis enim eligendi, adipisci eaque expedita eum unde facere. Ipsam similique id nobis perferendis officiis vero beatae voluptatibus facilis?Cum quae facere, iure quia facilis ex aspernatur amet animi nam soluta quos fugit sunt voluptatum delectus quod eius corporis neque sapiente rem at libero earum dolorem culpa quibusdam? Culpa!",
      date: "20/09/2022",
      time: "07:00 PM"
    },
  ]

  return (
    <div className='messages-main'>
        <h1>Add Food Requests</h1>
        <div className="messages">
          
            
              {
                messages.map((e)=>(
                  <IndividualMsg e={e} />
                ))
              }
                          
            
          
        </div>
    </div>
  )
}

export default Messages