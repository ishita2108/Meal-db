import React, { useContext, useEffect, useState } from "react";
import axios from "axios";


const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [meals, setMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null)

  const fetchMeals = async (url) => {
    setLoading(true);
    try {
      const { data } = await axios(url);
      //console.log(data)
      if (data.meals) {
        setMeals(data.meals);
      } else {
        setMeals([]);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

 
  const fetchRandomMeal = () =>{
    fetchMeals(randomMealUrl)
  }

  const selectMeal = (idMeal, favoriteMeal)=>{
    console.log(idMeal)
    let meal;
    meal = meals.find((meal)=> meal.idMeal === idMeal)
    setSelectedMeal(meal)
    setShowModal(true);
  }

  const closeModal = ()=>{
    setShowModal(false);
  }

  useEffect(()=>{
    fetchMeals(allMealsUrl)
  },[])

  useEffect(() => {
    if(!searchTerm)return
    fetchMeals(`${allMealsUrl}${searchTerm}`)
  }, [searchTerm]);



  return (
    <AppContext.Provider value={{ meals, loading, setSearchTerm, fetchRandomMeal, 
    showModal, selectMeal,selectedMeal, closeModal}}>
      {children}
    </AppContext.Provider>
  );
};

export const UseGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
