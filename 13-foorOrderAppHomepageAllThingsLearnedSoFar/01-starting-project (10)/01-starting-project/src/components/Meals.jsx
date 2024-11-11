import { useState , useEffect } from "react"
import MealItem from "./MealItem"


export default function () {
    //empty  meals data
    const [loadedMeals , setLoadedMeals] = useState([])


    useEffect(() => {
        async function fetchMeals() {
            //GET /meals
                                          //side effect
            const response = await fetch('http://localhost:3000/meals')
            if(!response.ok){
                // ...
            }
            const meals = await response.json()
            setLoadedMeals(meals)
        }
        fetchMeals()
    } , [])
    
    return (
        <ul id="meals">{loadedMeals.map((meal) => {
            return (
                <MealItem key={meal.id} meal={meal}></MealItem>
                )
            })}
        </ul>    
    )
}


















