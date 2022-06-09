import React from 'react';
import './Details.css';
const Details = (props) => {
    const {strMeal, strMealThumb, strInstructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5 } = props.details;
   
    return (
        <div>
            <div className="card" >
                <img src={strMealThumb} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title text-center">{strMeal}</h5>
                        <h6>How to Make it:</h6>
                        <p className="card-text">{strInstructions}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                        <h6>Ingridients:</h6>
                        <p>{strIngredient1}, {strIngredient2}, {strIngredient3}, {strIngredient4}, {strIngredient5}</p>
                    </div>
            </div>
        </div>
    );
};

export default Details;