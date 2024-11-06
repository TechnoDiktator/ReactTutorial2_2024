import Header from "./components/Header.jsx"
import Results from "./components/Results.jsx";
import UserInput from "./components/UserInput.jsx"
import { useState } from "react"
function App() {

  const [userInput , setUserInput] = useState({
    initialInvestment : 10000,
    annualInvestment : 1200,
    expectedReturn : 6,
    duration : 10
  })

    
  function handleChange(inputIdentifier , newValue){
    
    //this is the proper way of updating state that is using a function
    //inside the stateFuction
    setUserInput(prevUserInput => {
        return {
            ...prevUserInput,
            [inputIdentifier]:newValue
        }
    });
    
  }



  return (
    <>
      <Header></Header>
      <UserInput userInput={userInput} onChangeInput={handleChange} ></UserInput>
      <Results input={userInput}></Results>
    
    </>

  ) 
}

export default App
