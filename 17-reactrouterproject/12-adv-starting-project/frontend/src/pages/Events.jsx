// import { useEffect, useState } from 'react';

import EventsList from '../components/EventsList';


//this will help us get the closest loader functions data

import { useLoaderData  } from 'react-router-dom';











function EventsPage() {
    //getting loaders answer
    const events = useLoaderData()
    
    //const data = useLoaderData()
    
    //you can create you own error in he loader when there 
    //is one and send a different output
    // if(data.isError){
    //     return <p>{data.message}</p>
    // }

    //const events = data.events

    //AS WE HAAVE USED THE LOADER FUNCTION TO GET THE RESULT OF THE 
    //BELOW API HIT 
    //WE DONT NEED TO USE useEFFECT ANY MORE
    //   const [isLoading, setIsLoading] = useState(false);
    //   const [fetchedEvents, setFetchedEvents] = useState();
    //   const [error, setError] = useState();

    //   useEffect(() => {
    //     async function fetchEvents() {
    //       setIsLoading(true);
    //       const response = await fetch('http://localhost:8080/events');

    //       if (!response.ok) {
    //         setError('Fetching events failed.');
    //       } else {
    //         const resData = await response.json();
    //         setFetchedEvents(resData.events);
    //       }
    //       setIsLoading(false);
    //     }

    //     fetchEvents();
    //   }, []);
    


    return (
        //so now we dont have any hooks or states ...how do 
        //we acheive the smawe fuctionality that we had
        // <>
        // <div style={{ textAlign: 'center' }}>
        //     {isLoading && <p>Loading...</p>}
        //     {error && <p>{error}</p>}
        // </div>
        // {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
        // </>

        <EventsList events={events}></EventsList>

    );
}

export default EventsPage;


export async function loader() {

    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        //
        //we can return 
        //return {isError:true , message:"Could not fetch tha data"}


        //or

        //when you throw an error form a component 
        //react reouter detects it and will sent you v=backt o the 
        //nearest errors page if there is one
        //throw {message: "could not fetch events"}




        return new Response(JSON.stringify({message:"Could not fetch events"}) )

    } else {
        
      const resData = await response.json();
      return resData.events
        
      //we can do this alos
        //   const res = new Response('any data' , {
        //     status:201
        //   })
        
        //or this
        //return response
    }
} 




