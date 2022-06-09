import React from 'react';
import './Food.css';
const Food = (props) => {
    const { strMealThumb, strMeal, strArea, strCategory, strYoutube } = props.meal;
    // console.log(meal);
    const detailsHandler = props.detailsHandler;
    return (
        <div>
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={strMealThumb} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title">{strMeal}</h1>
                            <h4>Region: {strArea}</h4>
                            <h4>Type: {strCategory}</h4>
                            <button onClick={()=> detailsHandler(props.meal)} type="button" className="btn btn-dark mt-5">Details</button>
                            <a href={strYoutube}><button type="button" className="btn btn-dark ms-5 mt-5">Watch Recipe</button></a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Food;