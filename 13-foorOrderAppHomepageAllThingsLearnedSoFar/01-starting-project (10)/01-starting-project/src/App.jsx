import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/CartContext";



function App() {



  return (
    <>
      <CartContextProvider>
      <Header></Header>
      <Meals></Meals>
      </CartContextProvider>
    </>
  );
}

export default App;
