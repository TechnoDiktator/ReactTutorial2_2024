import {createSlice} from '@reduxjs/toolkit'

const uiSlice=  createSlice({
    name:'ui',
    initialState:{
        cartIsVisible:false,
        notification:null
    },
    reducers:{
        //WE ARE NOT REALLY MUTATING THE CURRENT STATE
        //TOOLKIT IS CREATING THE DEEPCOPY OD THEHEXISITING STATE 
        //AND THEN UPDATING THEIS NOEW COPY
        toggle(state){
            state.cartIsVisible = !state.cartIsVisible

        },
        
        showNotification (state , action){ 
            state.notification = {
                status:action.payload.status , title:action.payload.title,
                message:action.payload.message
            }
        } 


    }

})

export const uiActions = uiSlice.actions
export default uiSlice

