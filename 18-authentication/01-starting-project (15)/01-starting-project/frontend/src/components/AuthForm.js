import { Form , Link  , useSearchParams} from 'react-router-dom';
/*

In React, the useSearchParams hook is part of the react-router-dom library 
(v6 and later) and provides a way to work with the query 
string of the URL (i.e., the part after ? i\
n the URL). This hook is useful when you want 
to get or set URL query parameters in your 
component.

example
URL: https://example.com?page=2&sort=asc
searchParams will contain:
page: "2"
sort: "asc"




*/

import classes from './AuthForm.module.css';



function AuthForm() {

  const [searchParams , setSearchParams] = useSearchParams()

  const isLogin = searchParams.get("mode") === 'login'


  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
            {isLogin ? 'Create new user' : 'Login'}
          </Link>
          <button>Save</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;

/*

A dynamic route or dynamic URL is a route in a web application where part of the URL is variable, 
typically used to represent a specific resource or data that 
changes based on the request.

In dynamic routing, the part of the URL that changes is often 
represented by placeholders, and it allows you to 
match different URLs that follow a similar pattern.

Key Characteristics of Dynamic Routes:
Variable Path Segments: The URL structure contains variable 
parts that can change depending on the resource being requested.
Pattern Matching: Dynamic routes often use pattern matching 
to extract the dynamic segments of the URL and pass them to the application, allowing for routing to different pages based on the URL.
Example of Dynamic URL in Web Development:
Suppose you have an application that displays details about specific 
users. Instead of having a fixed URL for each user, you use a dynamic 
route to load the correct user based on their id.

Example dynamic URL:

bash
Copy code
https://example.com/users/:id
In this example, :id is a placeholder that can be replaced with an actual user ID, like:

arduino
Copy code
https://example.com/users/123

*/