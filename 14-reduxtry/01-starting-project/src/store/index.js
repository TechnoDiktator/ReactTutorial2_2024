import {createStore} from 'redux'

import { configureStore } from '@reduxjs/toolkit'

import counterSlice from './counter'
import authSlice from './auth'



//REDUX TOOLTIK



//==================================================
//HOW TO DEFINE THE ACTION VALUES LKE WE DID IN THE CONVENTIONAL REDUX STORE
//the action key present in the slice 
//automatically creates methods that spawn  actions for the registered reducer functions
//it even contains an implicitely created action name (that is type)
//and also key where you can define the payloaad too

//counterSlice.actions.toggleCounter
//========================================================





//FOR CREATINg SINGLE REDUCER
//const store = createStore(counterSlice.reducer)





//MULTIPLE REDUCERS======================================
//IF you want to pass mutiple reducers we use configurestore
const store = configureStore({
    //so you can pass multiple reducer
    //all individual reducers are merged into one
    reducer : {
        counter : counterSlice.reducer,
        auth : authSlice.reducer
    }

    //single reducer
    //reducer: counterSlice.reducer
})
//=========================================================

//IN THE END WE EXPORT THE STORE AND THE INTERNAL ACTIONS OBjECT OF EACH STATE SLICE
export const counterActions = counterSlice.actions
export const authActions = authSlice.actions
export default store





//===================================== OLDER WAY without toolkit =========================================

//WITHOUT REDUX TOOLIT THIS IS OLDER 
//METHOD TO REGISTER REDUCERS WITH REDUX

//export const INCREMENT  = 'increment'


//MODIFYING EXISTING STATE CAUSES THE SYSTEM TO HAVE 
//UNEXPECTED BEHAVIOUR

//SO ALWAYS CREATE  BRAND NEW STATE OBJECT

//NEVER MUTATE THE EXISTING STATE 
//ALWAYS CREATE A NEW STATE OBJECT WITH ALL THE PROPERTIES
//EDIt THE PART OF THE OBJECT YOU WNTR TO CHANGE
// const counteReducer = (state = initialState , action) => {

//     //avoid typos in action types
//     if(action.type === INCREMENT){
//         return {
//             counter:state.counter + 1 ,
//             showCounter : state.showCounter
//         }
//     }else if(action.type === 'decrement'){
//         return {
//             counter:state.counter - 1,
//             showCounter : state.showCounter
//         }
//     }else if(action.type === "increase"){
         
//         return {
//             counter : state.counter + action.amount,
//             showCounter : state.showCounter
//         }
//     }else if(action.type === 'toggle'){
//         return {
//             showCounter : !state.showCounter,
//             counter : state.counter
//         }
//     }
//     return state;
// }

//this cinitializes the store
//const store = createStore(counteReducer)




//we willprovie this store
//WHAT DOES PROVIDE MEAN
//export default store


































