import React from 'react';
import {useActionState} from 'react'
import {isEmail , isNotEmpty ,hasMinLength , isEqualToOtherValue } from '../util/validation';

export default function Signup() {


  function signupAction(prevFormState , formData) {

    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirm-password');
    const firstName = formData.get('first-name');
    const lastName = formData.get('last-name');
    const phone = formData.get('phone');
    const role = formData.get('role');
    const acquisitionChannel = formData.getAll('acquisition');
    const terms = formData.get('terms-and-conditions');
    
    console.log('Email:', email);

    let errors = []

    if (!isEmail(email)) {
      errors.push('Email is not valid!')
    }

    if (!isNotEmpty(password)) {
      errors.push('Password is required!')
    }

    if (!hasMinLength(password, 6)) {
      errors.push('Password must be at least 6 characters long!')
    }

    if (!isEqualToOtherValue(password, confirmPassword)) {
      errors.push('Passwords do not match!')
    }

    if (!isNotEmpty(firstName)) {
      errors.push('First name is required!')
    }
    if (!isNotEmpty(lastName)) {
      errors.push('Last name is required!')
    }

    if (!isNotEmpty(role)) {
      errors.push('Role is required!')  
    }

    if(!terms){
      errors.push('You must accept the terms and conditions!')  
    }

    if (acquisitionChannel.length === 0) {
      errors.push('You must select at least one acquisition channel!')
    }
    
    if(errors.length > 0) {
      console.log('Errors:', errors)
      return {
        errors ,
        enteredValues: {
          email,
          password,
          confirmPassword,
          firstName,
          lastName,
          phone,
          role,
          acquisitionChannel,
          terms
        }
      }
    }
    //if there are no errors, we can send the data to the server
    return {
      errors: null
    }


    
  
  }

  //what is the useActionState hook?
  // The useActionState hook is a custom hook that allows you to manage the state of an action in a React component.
  // It is used to handle the state of a form submission, including loading, success, and error states.
  // The hook takes an action function as an argument and returns an object with the following properties:
  // - isLoading: a boolean value that indicates whether the action is currently loading or not.
  // - isSuccess: a boolean value that indicates whether the action was successful or not.
  // - isError: a boolean value that indicates whether the action encountered an error or not.
  // - error: an object that contains the error message if the action encountered an error.
  // - data: an object that contains the data returned by the action if it was successful.
  // - execute: a function that can be called to execute the action.

  const [formState , formAction ] =  useActionState(signupAction, {errors: null});


  //what is the action of the form?
  // The action of the form is the function that will be called when the form is submitted.
  // It will be called with the form data as an argument. The form data is an instance of the FormData class.
  // The FormData class is a built-in class in JavaScript that allows you to easily create a set of key/value pairs representing form fields and their values.
  //is the action attribute also present in react jsx?



  return (
    <form action={formAction}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" defaultValue={formState.enteredValues?.email} />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" defaultValue={formState.enteredValues?.password} />
        </div>

        <div className="control">
          <label htmlFor="confirm-password" >Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
            defaultValue={formState.enteredValues?.confirmPassword}
          />
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input 
          type="text" 
          id="first-name" n
          ame="first-name" 
          defaultValue={formState.enteredValues?.firstName}
          />
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" 
          id="last-name" 
          name="last-name" 
          defaultValue={formState.enteredValues?.lastName}
          />
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select id="role" name="role" defaultValue={formState.enteredValues?.role}>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
            defaultChecked={formState.enteredValues?.acquisitionChannel?.includes('google')}
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
            defaultChecked={formState.enteredValues?.acquisitionChannel?.includes('friend')}
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input 
          type="checkbox" 
          id="other" 
          name="acquisition" 
          value="other" 
          defaultChecked={formState.enteredValues?.acquisitionChannel?.includes('other')}
          />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input 
          type="checkbox" 
          id="terms-and-conditions" 
          name="terms"
          defaultChecked={formState.enteredValues?.terms}
          />I agree to the terms and conditions
        </label>
      </div>

      { formState.errors && <ul>
        {formState.errors.map((error, index) => (
          <li key={error} className="error">
            {error}
          </li>
        ))}
      </ul>
      
      }


      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button className="button">Sign up</button>
      </p>
    </form>
  );
}
