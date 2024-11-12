import { useState , useEffect } from "react"
import MealItem from "./MealItem"
import useHttp from "../hooks/useHttp"
import Error from "./Error"

/*
//A MEAL ITEM OBJECT LOOKS LIKE THIS

{"id":"m1","name":"Mac & Cheese",
"price":"8.99",
"description":"Creamy cheddar cheese mixed 
with perfectly cooked macaroni, 
topped with crispy breadcrumbs. 
A classic comfort food.",
"image":"images/mac-and-cheese.jpg"}

*/

const requestConfig = {}
export default function Meals() {
    //empty  meals data
    //const [loadedMeals , setLoadedMeals] = useState([])


    // useEffect(() => {
    //     async function fetchMeals() {
    //         //GET /meals
    //                                       //side effect
    //         const response = await fetch('http://localhost:3000/meals')
    //         if(!response.ok){
    //             // ...
    //         }
    //         const meals = await response.json()
    //         setLoadedMeals(meals)
    //     }
    //     fetchMeals()
    // } , [])

    //CUSTOM HOO
    const {data:loadedMeals , //defining alias for the returned data
        isLoading , 
        error
    } = useHttp('http://localhost:3000/meals' , requestConfig , [])

    if(isLoading){
        return <p className="center">Loading Menu ... </p>
    }

    if(error){
        return <Error title={"failed to fetch menu"} message={error}></Error>
    }
    
    return (
        <ul id="meals">{loadedMeals.map((meal) => {
            return (
                <MealItem key={meal.id} meal={meal}></MealItem>
                )
            })}
        </ul>    
    )
}


















