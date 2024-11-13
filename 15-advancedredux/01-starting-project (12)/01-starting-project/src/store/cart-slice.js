import {createSlice} from '@reduxjs/toolkit'
import { uiActions } from './ui-slice'
import { ThemeProvider } from 'styled-components'


const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalQuantity:0,
        changed:false
    },
    reducers:{
        replaceCart(state , action){
            state.totalQuantity = action.payload.totalQuantity
            state.items = action.payload.items
        },

        addItemToCart(state , action){
            //redux toolkit is creating deepcopies of every thing that we are 
            //mutating here
            //in the end a deepcopy is returned and the prev state is never edited
            const newItem = action.payload
            const existingItem = state.items.find((item) => item.id === newItem.id)
            state.totalQuantity++
            state.changed = true
            //we are not actually altering the prev state 
            //redux toolkit is creating a deepcopy
            if(!existingItem){
                state.items.push({
                    id:newItem.id , 
                    price:newItem.price,
                    quantity:newItem.quantity,
                    totalPrice:newItem.price,
                    name: newItem.title,
                })
            }else{
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price


            }
        },

        removeItemFromCart(state , action){
            const id = action.payload
            const existingItem = state.items.find(item => item.id === id)
            state.totalQuantity--
            state.changed = true
            if(existingItem.quantity === 1){
                //remove
                state.items = state.items.filter(item => item.id !== id)
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            
            }else{
                //decrease
                existingItem.quantity--
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            
            }
        }


    }
    
})


/* =======================CRETING OUR OWN ACTIOn CREATOR====================================================

WE CAN ALSO CREATE OUR OWN ACTION CREATOR METHODS 
WHEN WORKING WITH REDUX TOOLKIT
*/
export const sendCartdata = (cart) => {
    //we can make it async as well to deal with side effects
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status:'pending',
            title:'Sending...',
            message:"Sending cart data"
        }))

        const sendRequest = async () => {

            const response = await fetch('https://freeproject-59eb8-default-rtdb.firebaseio.com/cart.json' , 
                { method:"PUT",
                  body:JSON.stringify(cart)
                } 
              )
              
            if(!response.ok){
                
            // dispatch(uiActions.showNotification({
            //   status:'Failure',
            //   title:'Data not Sent...',
            //   message:"Failed update"
            // }))
            
            throw new Error("Updating cart data failed")
            }
        }


        //HITTING API
        try{
            await sendRequest()
            dispatch(uiActions.showNotification({
                status:'success',
                title:'Data Sent...',
                message:"Successfully updated"
            }))

        }catch (error){


            dispatch(uiActions.showNotification({
              status:'error',
              title:'Data not Sent...',
              message:"Failed update"
            }))
        }

    }
}


//ANPOTHER CUSTON ACTION GENERATOR METHOD
export const fetchCartdata = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch("https://freeproject-59eb8-default-rtdb.firebaseio.com/cart.json")
        
        
            if(!response.ok){
                throw new Error("Counld not fetch cart data")
            }

            const data = await response.json()
            return data

        }

        try{
            const cartData =  await fetchData()
            dispatch(cartActions.replaceCart({
                items:cartData.items || [],
                totalQuantity:cartData.totalQuantity || 0,
                changed:false
            }))
        }catch(error){
            dispatch(uiActions.showNotification({
                status:'error',
                title:'Data not Fetched...',
                message:"Failed Fetch"
              }))
        }   

    }
}  




//=============================================================================







export const cartActions = cartSlice.actions
export default cartSlice














