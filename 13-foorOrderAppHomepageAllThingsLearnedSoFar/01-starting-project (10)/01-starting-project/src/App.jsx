import Header from "./components/Header";
import Meals from "./components/Meals";
import Cart from "./components/UI/Cart";
import { CartContextProvider } from "./store/CartContext";

import { UserProgressContextProvider } from './store/UserProgressContext';


function App() {



  return (
    <>
      <UserProgressContextProvider>
        <CartContextProvider>
          <Header></Header>
          <Meals></Meals>
          <Cart></Cart>
        </CartContextProvider>
      </UserProgressContextProvider>
    </>
  );
}

export default App;
