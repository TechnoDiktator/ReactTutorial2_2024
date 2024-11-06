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
        
      
        //very imp 
        /*
        even if you set the input type to number in an input field in 
        the front end componenet 
        JS wwill always receive it as a string
        and math operations will give wierd answers for 
        strings
        thus we have to explicitely cxast the value to a number
        so a shortcut to do this is to use a + sign
        */
        return {
            ...prevUserInput,
            [inputIdentifier]:+newValue
                            //the added + sign converts the value into a number
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
