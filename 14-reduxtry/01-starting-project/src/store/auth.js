import { createSlice } from "@reduxjs/toolkit"



const initialAuthState = {
    isAuthenticated:false
}

//ANOTHER SLICE
const authSlice = createSlice({
    name:"authentiacation",
    initialState:initialAuthState,
    reducers:{
        //WE ARE NOT MUTATINg THE CURRENT STATE
        //TOOLKIT TAKES CARE OF CLONING THE STATE 
        //AND THEN MODIFYING IT
        login(state){
            state.isAuthenticated = true
        },
        logout(state){
            state.isAuthenticated = false
        }
    }
})


export default authSlice