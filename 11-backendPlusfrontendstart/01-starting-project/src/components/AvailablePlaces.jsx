import Places from './Places.jsx';
import { useState , useEffect } from 'react';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../../../../07-useeffectAndothereffects/01-starting-project (3)/01-starting-project/src/loc';
import { fetchAvailablePlaces } from '../http.js';
import { useFetch } from '../hooks/useFetch.js';

//how to use the async await IN REACT

async function fetchSortedPlaces(){
  //sorting the places according to my geolocation
  const places = await fetchAvailablePlaces()

  return new Promise((resolve , reject)=>{

    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        places , 
        position.coords.latitude, 
        position.coords.longitude
      )


      resolve(sortedPlaces)

    })
  })
}





export default function AvailablePlaces({ onSelectPlace }) {
  //Fetch the data from the dummy api
  
  //WE ARE USING OUR CUSTOM HOOK NOW
  // const [availablePlaces ,  setAvailablePlaces] =  useState([])
  // const [isFetching , setIsFetching] = useState(true)
  // const [error , setError] = useState(null);
  
  //CUSTIM HOOK
  const {
    isFetching,
    error,
    fetchedData:availablePlaces,
  } = useFetch(fetchSortedPlaces , [])
  
  
  // //if we did not use useeffect we would get 
  // //an infinite loop!!!!!
  // useEffect( ()=>{

  //   //GRANDPAA APPROACH
  //   async function fetchPlaces(){
  //     setError(null)
  //     setIsFetching(true)
      
  //     try{

  //       const places = await fetchAvailablePlaces()
        
  //       //sorting the places according to my geolocation
  //       navigator.geolocation.getCurrentPosition((position) => {
  //       const sortedPlaces = sortPlacesByDistance(
  //         places , 
  //         position.coords.latitude, 
  //         position.coords.longitude
  //       )
  //       setAvailablePlaces(sortedPlaces)
  //       setIsFetching(false)
  //       })
      
  //     }catch (error){
  //       //...
  //       setError({
  //         message:error.message || "Counld not fetch data ..."
  //       })
  //       setIsFetching(false)
  //     }
  //   }

  //   fetchPlaces()
  //   //we could use the async await syntax BUT
  //   //react cmponents CANNOT be made ASYNC
  //   //so this is the LONG APPROACH
  //   // console.log("fetching places via dummy get api")

  //   // fetch('http://localhost:3000/places')
  //   // .then((response) => {
  //   //   return response.json()
  //   // })
  //   // .then((responseData)=>{
  //   //   console.log("data" , responseData)
  //   //   setAvailablePlaces(responseData.places)
  //   //  setIsFetching(true)
  //   // })
    
  // }, [])

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
