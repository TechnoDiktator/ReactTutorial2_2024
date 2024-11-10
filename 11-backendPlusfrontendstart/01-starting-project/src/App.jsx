import { useRef, useState, useCallback } from 'react';

import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';
import { fetchUserPlaces, updateUserPlaces } from './http.js';
import Error from './components/Error.jsx';
import { useFetch } from './hooks/useFetch.js';
function App() {
  const selectedPlace = useRef();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [errorUpdatingPlaces , setErrorUpdatingPlaces] = useState()

  //==================CUSTOM HOOK=================
  const {
    isFetching ,
    error , 
    fetchedData:userPlaces,//alias
    setFetchedData:setUserPlaces  //we have assigned an alias to property
  } = useFetch(fetchUserPlaces , [])
  //===============================================
  /*
  Any state that is present in a custiom hook 
  blongs to the Component in which 
  it is declared
  */
  //================================================




  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }





  async function handleSelectPlace(selectedPlace) {
    //await updateUserPlaces([selectedPlace , ...userPlaces])

    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });

    try{
      //will update the selected places in the backend
      await updateUserPlaces([selectedPlace , ...userPlaces])
    }catch (error){
      setUserPlaces(userPlaces)
      setErrorUpdatingPlaces({
        message:error.message || 'Failed to update places'
      })
    }
  }

  const handleRemovePlace = useCallback(async function handleRemovePlace() {
    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
    );
    try{
      await updateUserPlaces(userPlaces.filter((place)=> {
        return place.id !== selectedPlace.current.id
      }))
    }catch (error){
      setUserPlaces(userPlaces)
      setErrorUpdatingPlaces({
        message: error.message || 'Failed To Delete Place'
      })
    }

    setModalIsOpen(false);
  }, [userPlaces]);


  //to set the error as null is the modal is closed
  function handleError(){
    setErrorUpdatingPlaces(null)
  }


  return (
    <>
      <Modal open={errorUpdatingPlaces} onClose={handleError}>
        {errorUpdatingPlaces && (
        <Error title={"An error occured"} message={errorUpdatingPlaces.message} onConfirm={handleError} ></Error>
        )}
      </Modal>

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
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        {error && <Error title="An error occured" message = {error.message}></Error> }
        {!error && <Places
        isLoading={isFetching}
        loadingText="Fetching your places"
          title="I'd like to visit ..."
          fallbackText="Select the places you would like to visit below."
          places={userPlaces}
          onSelectPlace={handleStartRemovePlace}
        />}

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
