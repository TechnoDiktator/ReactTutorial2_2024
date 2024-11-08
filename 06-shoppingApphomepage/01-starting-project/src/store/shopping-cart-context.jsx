import {createContext} from 'react'


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








