import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import Food from '../Food/Food';
import './Menu.css';
const Menu = () => {

    const [meals, setMeals] = useState([]);
    const [details, setDetails] = useState([]);
    const [displayMeals, setDisplayMeals] = useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
        .then(res => res.json())
        .then(data => {
            setMeals(data.meals);
            setDisplayMeals(data.meals);
        })
    }, []);

    const detailsHandler =(item)=>{
        // console.log(item);
        setDetails(item);
    }

    const handleSearch = (event) =>{
        console.log(event.target.value);
        const searchText = event.target.value;
        let matchedMeals =  meals.filter(meal => meal.strMeal.toLowerCase().includes(searchText.toLowerCase()));
        // console.log(matchedMeals);
        setDisplayMeals(matchedMeals);

    };

    return (
        <div className='container'>
           <input onChange={handleSearch} className='form-control my-4' type="text" name="" id="" placeholder='Search Here' />
           <div className="row">
               <div className="col-lg-8 col-md-7 col-sm-12">

                   {
                       displayMeals.map(meal => <Food meal ={meal} detailsHandler ={detailsHandler}></Food>)
                   }
                   
               </div>
               <div className="col-lg-4 col-md-5 col-sm-12">
                   <Details details={details}></Details>
               </div>
           </div>
        </div>
    );
};

export default Menu;