import Places from './Places.jsx';
import { useState , useEffect } from 'react';
import Error from './Error.jsx';



//how to use the async await IN REACT

export default function AvailablePlaces({ onSelectPlace }) {
  //Fetch the data from the dummy api
  
  const [availablePlaces ,  setAvailablePlaces] =  useState([])
  const [isFetching , setIsFetching] = useState(true)
  const [error , setError] = useState(null);
  //if we did not use useeffect we would get 
  //an infinite loop!!!!!
  useEffect( ()=>{

    //GRANDPAA APPROACH
    async function fetchPlaces(){
      setError(null)
      setIsFetching(true)
      
      try{
        const response = await fetch('http://localhost:3000/places');
        if(!response.ok){
          throw new Error("Failed to fecth data")
        }
        const resData =  await response.json()
        setAvailablePlaces(resData.places)
        if (resData){
          setIsFetching(false)
        }

      }catch (error){
        //...
        setError(error)
      }
      setIsFetching(false)
    }

    fetchPlaces()
    //we could use the async await syntax BUT
    //react cmponents CANNOT be made ASYNC
    //so this is the LONG APPROACH
    // console.log("fetching places via dummy get api")

    // fetch('http://localhost:3000/places')
    // .then((response) => {
    //   return response.json()
    // })
    // .then((responseData)=>{
    //   console.log("data" , responseData)
    //   setAvailablePlaces(responseData.places)
    //  setIsFetching(true)
    // })
    
  }, [])

  if(error){
    return <Error message={error.message} title="an error occured"></Error>
  }
  return (
    <Places
      title="Available Places"
      isLoading = {isFetching}
      places={availablePlaces}
      loadingText = "Fetching Data Please Wait ..... "
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
