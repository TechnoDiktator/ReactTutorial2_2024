import {useLoaderData , useRouteLoaderData ,  useParams, redirect  } from "react-router-dom"

import EventItem from '../components/EventItem';

export default function  EventDetailPage() {
    //use params is used to get all the request parameters
    const params = useParams()

    const data = useRouteLoaderData("event-detail")

    return ( 
    <>
      <EventItem event={data.event}></EventItem>  
    </>
    )
}


//when you pass a loader to a route 
//so that that functiojn is executed befoe the new page is added
//react router passes two things to the loader implicitely
export async function loader ({request , params}) {
    
    const id = params.eventId
    
    const response = await fetch('http://localhost:8080/events/' + id , {
        method:'DELETE'
    })
    
    if(!response.ok){
        throw {status:500 , message:"error occured"}
    }else{
        return response
    }

} 

export async function action ({request , params}) {

    
    const id = params.eventId
    
    const response = await fetch('http://localhost:8080/events/' + id)

    
    if(!response.ok){
        throw {status:500 , message:"could not delete event"}
    }else{
        return redirect("/events")
    }




}