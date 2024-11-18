import { useEffect } from 'react';
import classes from './NewsletterSignup.module.css';
import { useFetcher } from 'react-router-dom';
/*

The useFetcher hook in React Router is a powerful tool that allows you to interact with 
routes without causing navigation. It's particularly useful for actions
 like loading data or submitting forms asynchronously while staying on the current page. This can improve user experience by avoiding full-page reloads or unnecessary transitions.

Key Features of useFetcher
Loading Data
You can trigger a loader of a specific route programmatically, 
fetch its data, and use it within your component without 
navigating to the route.

Submitting Data
It allows you to send data to an action route (similar to a 
form submission) without leaving the current page.

Accessing Fetcher State
It provides states like idle, loading, and submitting, 
which can be used to show spinners, disable buttons, 
or give visual feedback to users.

The fetcher object provides these properties and methods:

fetcher.load(url): Triggers a loader for the specified route.
fetcher.submit(formData | object, options): Submits data to an action route.
fetcher.state: The current state of the fetcher (idle, loading, or submitting).
fetcher.data: The resolved data from the loader or action.
fetcher.formData: The form data being submitted (if applicable).



*/

function NewsletterSignup() {

    const fetcher = useFetcher()

    const {data , state} = fetcher

    useEffect(()=>{

        if(state === 'idle' && data && data.message){
            window.alert(data.message)
        }

    },)

    return (
    <fetcher.Form method="post" 
    action='"/newsletter'
    className={classes.newsletter}>
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;