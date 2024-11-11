
import { useReducer } from "react";
import { createContext } from "react";



const CartContext = createContext({
    items:[],
    addItem:(item)=>{},
    removeItem:(id)=>{}


})


function cartReducer(state , action) {
    if(action.type === 'ADD_ITEM'){
        //update the state to add a meal item
        //never mutate an existing state 
        //instead make a copy

        const existingCartItemIndex = state.items.findIndex((item) => {
            return item.id === action.item.id
        })
        const updatedItems =  [...state.items]
        //find index returns -1 if it is not able to find
        if(existingCartItemIndex > -1) {
            
            //prepare the existing obh=jects
            const existingItem =state.items[existingCartItemIndex] 
            //create its copy with updated quantity
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            }
            //assign the updated item at that index
            updatedItems[existingCartItemIndex] = updatedItem

        }else{
            //prepare fresh object 
            updatedItems.push({...action.item , quantity:1})
        }

        //finally return the final state
        return {
            ...state , items:updatedItems
        }

    }else if(action.type === "REMOVE_ITEM"){

        const existingCartItemIndex = state.items.findIndex((item) => {
            return item.id === action.item.id
        })


        const existingCartItem = stateitems[existingCartItemIndex]
        const updatedItems = [...state.items]
        if(existingCartItem.quantity === 1){
            //remove and delete
            
            updatedItems.splice(existingCartItem , 1)//splice
        }else{
            //reduce its quantity by one
            const updatedItem = {...existingCartItem , 
                quantity:existingCartItem.quantity - 1
            }
            updatedItems[existingCartItemIndex]= updatedItem
        }
        return {...state , items: updatedItems}
    }
    return state
}



export function CartContextProvider({children}){
    
    const [cart , dispatchCartAction] = useReducer(cartReducer , {items:[] })

    function addItem(item) {
        dispatchCartAction({type:'ADD_ITEM' , item:item })
    }
    function removeItem(id) { 
        dispatchCartAction({type : 'REMOVE_ITEM' , id:id})
    }

    //returning the context that we want to pass to all 
    //components of the app
    const cartContext = {
        items:cart.items,
        addItem,
        removeItem
    }
    console.log(cartContext)


    return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>



}

export default CartContext














