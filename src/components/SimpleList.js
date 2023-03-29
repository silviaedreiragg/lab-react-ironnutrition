import React, { useState } from 'react'
import foods from "../foods.json";
import FoodBox from './FoodBox';


function SimpleList() {
    const [allFoods, setAllFoods] = useState(foods)


    return (
        <div className='cards-plates'>
        <div className="div-title">
            <h2 className='title'>Food list</h2>
        </div>
            {allFoods.map((food, i) => (
                <FoodBox key={i} food={food} />
            ))}
            
        </div>
    )
}

export default SimpleList