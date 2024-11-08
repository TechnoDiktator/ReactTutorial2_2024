import { useRef,  useCallback, useState , useEffect } from 'react';

import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import { sortPlacesByDistance } from './loc';
/*
In programming, a side effect is any observable change that occurs in the system or environment outside the function’s return value when that function is executed. In the context of JavaScript and especially React, side effects often involve interacting with the outside world, modifying global state, or altering something that persists beyond the function's scope.

Examples of Side Effects
Here are some common examples of side effects in JavaScript and React:

Data Fetching: When you fetch data from an API, the act of requesting data and receiving it is a side effect, as it involves network activity and may change the component’s state once the data arrives.

Modifying DOM Elements Directly: Directly changing the DOM with code outside of React’s managed state (e.g., document.getElementById().innerText = "Hello") is a side effect. This bypasses React’s virtual DOM and can lead to unexpected behavior.

Logging to the Console: Writing to the console, though minor, is a side effect. It changes the system’s log output, affecting the environment outside the function.

Setting or Clearing Timers: Operations like setTimeout or setInterval produce side effects because they schedule actions to occur at a later time, potentially altering behavior outside of the function’s direct execution.

Updating Local Storage or Cookies: Storing data in localStorage or cookies to persist information across page loads is a side effect, as it interacts with the browser’s storage.

Subscribing to or Unsubscribing from Events: Adding event listeners or unsubscribing from them affects application behavior in ways that are not related to the function's return value.

Side Effects in React
In React, side effects are handled mainly in lifecycle functions (for class components) or using the useEffect hook (for functional components). Side effects should ideally be performed outside of the main render flow because they don’t directly relate to the component's rendering.

useEffect Hook
In React functional components, the useEffect hook is used to manage side effects. For example:
*/


let storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || []
// Ensure storedIds is an array
if (!Array.isArray(storedIds)) {
storedIds = [];
}
const storedPlaces = storedIds.map((id) => 
AVAILABLE_PLACES.find((place) => place.id === id))




function App() {

  //const modal = useRef();
  const selectedPlace = useRef();

  const [modalIsOpen , setModalIsOpen] = useState(false)

  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);
  const [availablePlaces , setAvailablePlaces] = useState([])

  //thus to handle sideeffects useeffect was built
  /*==========================================================
  the usage of sideeffect is this 
  AFTER THE RENDERING OF THE COMPONENT
  USEEFFECT RUNS
  IT IS BASICALLY SCHEDULED TO RUN AFTER THE RENDERING
  THE RERENDERING DEPENDS ON 
  WHAT HAS BEEN PASSED IN THE SECOND ARGUEMENT 
  that is the dependency array
  */



  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(AVAILABLE_PLACES , 
        position.coords.latitude , 
        position.coords.longitude
      );
      setAvailablePlaces(sortedPlaces)

    });
   } , [])
  //THIS CDE HERE iS A SIDEEFFECT AS IT IS NOT RELATED DIRECTLY TO THE 
  //REACT COMPONENET 
  /*
  the location code below is a sideeffect 
  as it will take time for this function to complete 
  and it will run in the background 
  completely independent of the rect render cycle


  So it might be possible that the componnet has already rendered and
  the location function is already running

  So how do we utilize the result of the code below 
  in our component


  */
  // navigator.geolocation.getCurrentPosition((position) => {
  //   const sortedPlaces = sortPlacesByDistance(AVAILABLE_PLACES , 
  //     position.coords.latitude , 
  //     position.coords.longitude
  //   );

    // if we used useState in this situation 
    // it will cause a infinite loop 
    // because as the componenet is rerendered 
    // it will hit the navigation fucntion again and 
    
    //===== WE CANNOT USE USESTATE =====
    // setAvailablePlaces(sortedPlaces)
    //==================================
  // });


  function handleStartRemovePlace(id) {
    // modal.current.open();
    setModalIsOpen(true)
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false)
    // modal.current.close();
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
      
    
    });

    //see that this is also a side effect as we are using the 
    //browser caache
    //but it is fine as we are not updatating any state variable
    //by its result 

    //NOT EVERY SIDEEFFECT NEED USEEFFECT
    /*
    You're absolutely correct! Not every side effect in 
    \React needs to be handled with useEffect. 
    Some side effects are straightforward and can be 
    managed within the component without useEffect. 
    Let’s break down when you do and don’t 
    need useEffect for handling side effects in React.  
    */

    //BELOW CODE WILL NOT CAUSE ANY RERENDERING
    //ALSO IT IS SYNCHRONOUSLY
   const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
    if (!storedIds.includes(id)) {
        // Store the updated array in localStorage
        localStorage.setItem('selectedPlaces', JSON.stringify([id, ...storedIds]));
    }
  }



  /*
  
The useCallback hook in React is used to memoize (or cache)
 a function, preventing it from being recreated on each 
 render unless its dependencies change. T
 his is especially helpful for optimizing performance i
 n scenarios where the function is passed as a prop 
 to child components,
 
 or when the function is computationally expensive and 
 shouldn't be needlessly recalculated.
  
  Memoization: useCallback returns a memoized version of the callback function that only changes if the values in the dependency array change.
Dependency Array: Like useEffect, the dependency array controls when the function should
 be recreated. If the values in this array don’t change 
 between renders, useCallback returns the previously 
 memoized function.

  */
  const handleRemovePlace =   useCallback( function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    //modal.current.close();

    setModalIsOpen(false)

    const storeIds = JSON.parse(localStorage.getItem("selectedPlaces")) || []
    localStorage.setItem("selectedPlaces" , JSON.stringify(storeIds.filter((id) =>id != selectedPlace.current)))
  },[])

  return (
    <>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create you
          r personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          fallbackText="Sorting Places By Distance From Your Location"
          title="Available Places"
          places={AVAILABLE_PLACES}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
