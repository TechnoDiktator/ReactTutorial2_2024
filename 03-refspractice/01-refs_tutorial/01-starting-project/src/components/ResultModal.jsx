import {forwardRef  , useImperativeHandle , useRef} from 'react'


import {createPortal} from 'react-dom'

/*
In React, the useImperativeHandle hook is useful when you 
want to customize the instance value that a parent 
component receives from a child component when using 
React.forwardRef. Essentially, it allows the parent to 
interact directly with certain methods or properties of 
the child component's instance—without directly 
exposing the full internal details of that child component.

Why Use useImperativeHandle?
When building reusable components, there are cases 
where the parent needs to call specific functions 
on the child component, such as focusing an 
input or resetting a form. If the child component 
is using complex internal logic, you may not 
want to expose all of it to the parent component. 

Instead, useImperativeHandle can expose 
just the necessary methods.

How It Works
Wrap the Component with forwardRef: useImperativeHandle 
only works with forwardRef, as it requires a ref to be 
passed from the parent to the child.

Define the Ref’s Interface: Inside the child, useImperativeHandle customizes which functions or properties are exposed.
Example

Here’s a simple example to demonstrate how it works:
import React, { useRef, forwardRef, useImperativeHandle } from 'react';

const ChildComponent = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    clear: () => {
      inputRef.current.value = '';
    }
  }));

  return <input ref={inputRef} />;
});

const ParentComponent = () => {
  const childRef = useRef();

  const handleFocus = () => {
    childRef.current.focus();
  };

  const handleClear = () => {
    childRef.current.clear();
  };

  return (
    <div>
      <ChildComponent ref={childRef} />
      <button onClick={handleFocus}>Focus Input</button>
      <button onClick={handleClear}>Clear Input</button>
    </div>
  );
};

*/











//this is how forward ref is used when you wnt to use the ref of a child component 
//in the parent ...you cant directly use useref as a prop 



const ResultModal =  forwardRef(function ResultModal(  {onReseting , targetTime , remainingTime} , ref ) {
     
    const dialog = useRef();
    

    const userLost = remainingTime <0
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime*1000))*100 )

    useImperativeHandle(ref , ()=>{
        return {
            open() {
                dialog.current.showModal()
            }
        }
    });

    
    //the create portal is used to isolate certain 
    //components from the current dom 
    //it basically creates a virtual dom for the underlying component 
    //above the main dom ...which is what the MODAL should do iddeally
    //it should not be part of the main dom .... that is it should not be nested 
    //but instead be rendered just below the body tag when called
    return createPortal(
    <dialog onClose={onReseting} ref={dialog} className="result-modal">
        {userLost && <h2>You Lost </h2>}
        {!userLost && <h2>Your score : {score} </h2>}
        <p>The target time was <strong>{targetTime} seconds.</strong></p>
        <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left</strong></p>
    
        <form action="dialog" onSubmit={onReseting}>
            <button>Close</button>
        </form>
    </dialog>
    
    ,  document.getElementById('modal')
    
)
})

export default ResultModal