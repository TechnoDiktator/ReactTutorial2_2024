import CustomInputComponentLoseFucusState from './components/CustomInputComponentLoseFucusState.jsx';
import Header from './components/Header.jsx';
import Login from './components/Login.jsx';
import LosingFocusStateBasedLogin from './components/LosingFocusStateBasedLogin.jsx';

import Signup from './components/Signup.jsx';

import StateBasedLogin from './components/StateBasedLogin.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <h1>getting form data in FormData object</h1>
        <Signup></Signup>
        
        <h1>State based validation</h1>
        <StateBasedLogin></StateBasedLogin>
        
        <h1>State based login with lost focus</h1>
        <LosingFocusStateBasedLogin></LosingFocusStateBasedLogin>

        <h1>Ref based login with validation</h1>
        <Login></Login>
      
        <h1>Custom input compoonent lose focus login </h1>
        <CustomInputComponentLoseFucusState></CustomInputComponentLoseFucusState>

      </main>
    </>
  );
}

export default App;
