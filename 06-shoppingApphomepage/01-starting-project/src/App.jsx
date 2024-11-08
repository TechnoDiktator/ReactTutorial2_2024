import { useState } from 'react';

import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
import Product from './components/Product.jsx';

/*
We are using the contxt api of react

So the idea is that prop drilling gets very cumbersome sometimes 
because we have to pass the same prop all accross inside out child
grandchild componenets and so on ,

that is from the uotermost parent to the innermost child

If we instead create a context using react for the smae 
we can 
JUST PASS THE CONTEXT TO THE OZUTEZZRMOST COMPONENET
which is the app component 
and that CONTEXT can be accesseed by any underlying children 
no matter how deeply they are nested 

so PROP DRILLING can be avoidded with this simple tchnique

STEPS :
first create the js file which stores the context 
in a folder called store(convention)
using the create context fucntion in react

The context name is deliberately kept to start with a capital letter 
so that it can be trated as a component of react


then that same context you created can be imported to the position from 
where you want to inject it 


eg. CartContext below

Wrap you componnent in a component like

<CartContecxt.Provider> .....All other componenets   </CartContext.Provider>


and you are done


Important 


When we change something inside the context that we are passing to a
our app for example a variable in the sontext 
or a property 

ithen the componenet that is using that value/[roperty will be reevaluates 
it sort of works like the state hook

*/


import { CartContext } from './store/shopping-cart-context.jsx';


function App() {

  //this is the smae formt as the object in the usecontext 
  //it is not necessaru tp do so 
  //it makes stuff easier

  const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });

  function handleAddItemToCart(id) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === id
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === id);
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
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === productId
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
      };
    });
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
  items: shoppingCart.items,
  addItemsToCart:handleAddItemToCart,
  updateItemQuantity:handleUpdateCartItemQuantity

}

  return (


    <CartContext.Provider value={shoppingCart } >
      <Header/>
      <Shop >
          {DUMMY_PRODUCTS.map((product) => (
              <li key={product.id}>
                <Product {...product}  />
              </li>
            ))}
      </Shop>
    </CartContext.Provider>
  );
}

export default App;
