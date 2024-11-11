import { useState } from "react";
import { createContext } from "react";



const UserProgressContext = createContext({
    progress:'',
    showCart:()=>{},
    hideCart:()=>{},
    showCheckout:()=>{},
    hideCheckOut:()=>{}
})

function UserProgressContextProvider({children}){

    //states
    cosnt [userProgress , setUserProgress] = useState('')

    function showCart() {
        setUserProgress('cart')
    }
    function hideCart() {
        setUserProgress('')
    }
    function showCheckOut(){
        setUserProgress('checkout')
    }
    function hideCheckOut(){
        setUserProgress('')
    }


    const userProgressContext = {
        progress:userProgress,
        showCart,
        hideCart,
        showCheckOut,
        hideCheckOut
    }


    return (
        <UserProgressContext.Provider value={userProgressContext}>{children}</UserProgressContext.Provider>
    )
}

