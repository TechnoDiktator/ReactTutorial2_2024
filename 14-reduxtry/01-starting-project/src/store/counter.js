import { createSlice } from "@reduxjs/toolkit"


const initialCounterState = {counter:0 , showCounter : true}


//EVERY REDUX TOOLKIT SLICE NEEDS A NAME
const counterSlice = createSlice({
    name:'counter',
    initialState: initialCounterState , //our ostate object
    reducers:{ //creating the reducer object
        increment(state){
            //it may look like 
            //that we are editing the existing 
            //state 
            //but redux 
            //toolkit actualy is cloning 
            //the state object (deep copy)
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        /*
        it might look lie tha we have not passed an
        action object in the abocve reducer functions 
        but the redux toolit is implicitely doing that 
        */
        increase(state , action){        //the redux toolkit implicit action 
                                        //object contains a predefined key 
                                         // that is the payload key where we can provide the action payload
            state.counter = state.counter + action.payload
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter
        }
    },
})


export default counterSlice
