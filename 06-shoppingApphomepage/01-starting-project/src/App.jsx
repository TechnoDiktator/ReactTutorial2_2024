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


//import { CartContext } from './store/shopping-cart-context.jsx';

import CartContextProvider from './store/shopping-cart-context.jsx';

function App() {
  

  return (


    <CartContextProvider >
      <Header/>
      <Shop >
          {DUMMY_PRODUCTS.map((product) => (
              <li key={product.id}>
                <Product {...product}  />
              </li>
            ))}
      </Shop>
    </CartContextProvider>
  );
}

export default App;
