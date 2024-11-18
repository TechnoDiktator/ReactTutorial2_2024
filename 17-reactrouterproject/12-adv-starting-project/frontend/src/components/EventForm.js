import { Form, redirect,useNavigate , useNavigation  , useActionData} from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  const navigate = useNavigate();
  function cancelHandler() {
    navigate('..');
  }

  const navigation  =  useNavigation()

  //it is basically used to capture what state 
  const isSubmitting  = navigation.state === 'submitting'

  /*===============+USE NAVIGATION===============================
  
  In React Router, the useNavigation hook is used 
  to access and manage the navigation state of your application. 
  It provides detailed information 
  about the current navigation process, making it useful for creating responsive
  and dynamic user experiences, such as displaying loading indicators during route transitions.

  Key Use Cases for useNavigation
  Access Navigation State:

  It lets you monitor whether a navigation is happening, and if so, whether it's pending, idle, or submitting.
  This is useful for customizing UI elements like disabling buttons or showing spinners during navigation.
  Handle Form Submissions in React Router:

  When working with forms in React Router, useNavigation can tell you if a submission is in progress, allowing you to provide real-time feedback to users.
  Improve User Feedback:

  You can show progress indicators like spinners or skeleton loaders to inform users that a navigation process is underway.
  Navigation States
  idle: No navigation is happening.
  loading: A navigation is in progress, such as fetching data for a new route.
  submitting: A form submission is being processed.  



  The useNavigation hook in React Router knows that a form is s
  ubmitting because the Form component from React Router is 
  tightly integrated with the router's navigation system. 
  Here's how it works:

  . The Form Component Integration
  When you use the Form component provided by React Router, it automatically 
  wires up its submission to the router's action mechanism for the corresponding route.
  When the form is submitted, React Router internally changes the navigation 
  state to "submitting" and informs all components using the 
  useNavigation hook.

  ===============================================================================
  */



  /*
  ===========================USE ACTION DATA HOOK======================



  ==========================================================================
  */

  //since this componenet is rendered py the newEventPage component that 
  //receives an actionsReasponse ..its children also have the same action function
  //data access
  const data  = useActionData()



  return (

    //THE action function on the route is only triggered when you 
    //use the rect router dom FORM component
    <Form method={method} className={classes.form}>
      {data && data.errors && <ul>
        {Object.values(data.errors).map((error)=>{
            return (
              <li key={error}>{error}</li>
            )
        })}
        </ul>}
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required  defaultValue={event ? event.title : ''}/>
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required  defaultValue={event ? event.image : ''}/>
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required  defaultValue={event ? event.date : ''}/>
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required  defaultValue={event ? event.description : ''}/>
      </p>
      <div className={classes.actions}>
        <button disabled={isSubmitting} type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled={isSubmitting}>{isSubmitting ? 'Submitting':'Save'}</button>
      </div>
    </Form>
  );
}

//like loader for actions also provides some implicit things when an actiojn is called
export async function action({request , params}) {
    
  const method = request.method
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
  
  let url = 'http://localhost:8080/events'

  if (method === 'PATCH'){
    const eventId =params.eventId
    url = url + eventId
  }
  const response = await fetch(url,{
      metho:method,
      body:JSON.stringify(eventData),
      headers:{
          'Content-Type':'application/json'
      }
  })

  if(response.status === 422){
      //when we return something in the action 
      //fucntions the underlyig component receives the data\
      //result or response

      return response
  }


  //if you dont want to throw the error upwards and display the common 
  //error page that we ahve defined for this route

  if(!response.ok){
      throw {status:500 , message:"Could not post fdata"}
  }else{
      //after submitting form successfully
      return redirect('/events')
  }


}





export default EventForm;
