import {createContext , useReducer} from 'react'
import { DUMMY_PRODUCTS } from '../dummy-products';



/*
What is a reducer
A function that reduces one or more complexx values into a simpler one

example [1 , 2 , 3] =====> 123

*/




/*
The default value (object that we ahev made) that we are providing 
in the create context 
basically defines what type of context to expect 
for all the child componenets
 */
export const CartContext  = createContext(
    //pass a default value -> array , object  , string etc 
    {
        items: [],
        addItemsToCart: ()=>{},
        updateItemQuantity:()=>{}

    }
);


//     USE REDUCER
/*
In React, useReducer is a powerful hook that provides an 
alternative to useState for managing complex state logic. 
It’s particularly useful when you have state that depends 
on previous state or when your state transitions 
involve multiple steps or conditions, s
uch as managing form inputs, 
complex UI components, or handling state 
logic that would otherwise be difficult to 
manage with useState alone.

How useReducer Works
useReducer is based on the concept of reducers, 
similar to how Redux works. 
Instead of simply setting new state directly, 
you define a reducer function that calculates 
the new state based on the current state and an action.
 This helps make state transitions more predictable 
 and the code easier to understand.


    const [state, dispatch] = useReducer(reducer, initialState);
    
    reducer: A function that defines how the state should change based on an action.
    
    
    initialState: The initial value of your state.
    
    state: The current state.
    
    dispatch: A function you can use to trigger an action, which will then be processed by the reducer function.


*/
//




function shoppingCartReducer(state , action) {
    if(action.type ==='ADD_ITEM'){
        //..
        prevShoppingCart = state

        const updatedItems = [...prevShoppingCart.items];

        const existingCartItemIndex = updatedItems.findIndex(
          (cartItem) => cartItem.id === action.payload.id
        );
        const existingCartItem = updatedItems[existingCartItemIndex];
  
        if (existingCartItem) {
          const updatedItem = {
            ...existingCartItem,
            quantity: existingCartItem.quantity + 1,
          };
          updatedItems[existingCartItemIndex] = updatedItem;
        } else {
          const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload.id);
          updatedItems.push({
            id: id,
            name: product.title,
            price: product.price,
            quantity: 1,
          });
        }
  
        return {
            
          items: updatedItems,
        };
    }else if(action.type === "UPDATE_ITEM"){
        prevShoppingCart = state

        const updatedItems = [...prevShoppingCart.items];
        const updatedItemIndex = updatedItems.findIndex(
          (item) => item.id === action.payload.productId
        );
  
        const updatedItem = {
          ...updatedItems[updatedItemIndex],
        };
  
        updatedItem.quantity += action.payload.amount;
  
        if (updatedItem.quantity <= 0) {
          updatedItems.splice(updatedItemIndex, 1);
        } else {
          updatedItems[updatedItemIndex] = updatedItem;
        }
  
        return {
          items: updatedItems,
        };
    }
    return state;
}


















//Heref we are basically building our definition for the coontext
export default function CartContextProvider({children}){

    const [shoppingCartState , shoppingCartDispatch] = useReducer(shoppingCartReducer ,  {
        items:[], //passing the very initial state
    })


    //this is the smae formt as the object in the usecontext 
    //it is not necessaru tp do so 
    //it makes stuff easier

    //const [shoppingCart, setShoppingCart] = useState();

  function handleAddItemToCart(id) {
    

    //WHAT WE aRE PASSINg INSITE THE DISPATCH FUNCTION
    //IS CALLED THE ACTION OBJECT

    //THIS WILL DEFINE THE REDUCER FUNCTION 
    //WHAT STATE UPDATE LOGIC HAS TO BE EXECUTED
    shoppingCartDispatch({
        type:'ADD_ITEM',
        payload: id
    })

    // setShoppingCart((prevShoppingCart) => {
        //no need to put logic here it is present in the displatch function of the reducer
    // });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    // setShoppingCart((prevShoppingCart) => {

    // });

    shoppingCartDispatch({
        type:"UPDATE_ITEM",
        payload: {
            productId:productId,
            amount:amount
        }
    })

  }


  /*
  YOU HAVE TO PASS THAT SAME FORMAT 
  OBJECT THAT YOU CREATED 
  INSIDE THE CREATE CONETXT API
  
  LIKE THE WAY WE HAVE DONE HERE
  WE HAVE CREATED  A STATE OBJECT WITH THE SAME STRUCTURE NAD 
  GIVEN IT ZTO THE CNTEXT.PROVIDER 

  */


  const ctxValue = {
  items: shoppingCartState.items,
  addItemsToCart:handleAddItemToCart,
  updateItemQuantity:handleUpdateCartItemQuantity

  } 

    return <CartContext.Provider value={ctxValue}>
        {children}
    </CartContext.Provider>

}











