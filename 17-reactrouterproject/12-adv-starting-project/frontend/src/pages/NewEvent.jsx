import { redirect } from "react-router-dom"
import EventForm from "../components/EventForm"

export default function  NewEventPage() {
    return <>
        <EventForm></EventForm>
    
    </>
}

//like loader for actions also provides some implicit things when an actiojn is called
export async function action({request , params}) {
    
    const data = await request.formData()
    
    //mane attributes of all form fileds
    const eventData  = {
        title:data.get('title'),
        image:data.get('image'),
        date:data.get('date'),
        description:data.get('description')
    }
    console.log(data.get('title'))
    console.log("Hi")
    
    const response = await fetch('http://localhost:8080/events',{
        metho:'POST',
        body:JSON.stringify(eventData),
        headers:{
            'Content-Type':'application/json'
        }
    })

    if(!response.ok){
        throw {status:500 , message:"Could not post fdata"}
    }else{
        //after submitting form successfully
        return redirect('/events')
    }


}
