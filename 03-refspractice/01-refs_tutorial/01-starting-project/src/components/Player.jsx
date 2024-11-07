
import { useState , useRef } from 'react';

export default function Player() {


  //so the use ref is 
  //used to provide us the reference of the 
  //component with which we use it
  const playerName = useRef()

  const [enteredPlayerName , setEnteredPlayerName]= useState('')  

  //so we can directly assign what is contained in the 
  //refs component to the useState variable this way
  function handleClick() {
    //setSubmitted(true)
    
    //we dont need to use the above hook to mark submission 
    setEnteredPlayerName(playerName.current.value)
    
    //so we  can also clear what is stored in the componenet 
    //after the submit button has been 
    //presseed this way
    playerName.current.value = ''

  }

  //whenever a ref changes it doen not refresh or rerender the component

  return (
    <section id="player">
                    {/* an even shorter form of ternary operator */}
      <h2>Welcome  {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        {/* ref is present in every react tag by default */}
        <input 
        ref={playerName}  
        type="text" 
        />
        <button onClick={handleClick}>  Set Name </button>
      </p>
    </section>
  );
}
