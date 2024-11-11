import { useState } from "react";
import Input from "./Input";

export default function StateBasedLogin() {


  // const [enterEmail , setEnteredEmail] =useState('')
  // const [enteredPassword , setEnteredPassword] =useState('')

  // function handleEmailChange(event) {
  //   setEnteredEmail(event.target.value)
  // }

  // function handlePasswordChange(event){
  //   setEnteredPassword(event.target.value)
  // }  

  //===========================================================
  const [enteredValues , setEnteredValues] = useState({
    email:'',
    password:''
  })

  //VALIDATING FLAGS
  const emailIdInvalid = enteredValues.email !=='' &&
                         !enteredValues.email.includes('@')



  function handleInputChange(identifier , value){
    setEnteredValues(prevValues => {
      return {
        ...prevValues,
        [identifier]:value
      }

    })
  }

  function handleSubmit(event){
    console.log("pressed")
    //this will preventthe from from refreshing
    event.preventDefault()
    console.log(enteredValues)
  }
  //==============================================================

  return (

    /*
    the defaultbrowser behaviour for buttons inside forms is that 
    the page will be refreshed as a form submits
    that is reload

    this could be a problem if want  to show the user 
    some validation etc
    */

    /*
    
    to prevent a form from refreshing 
    when submitting it 
    we use onSubmit
    */
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">


        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input 
            onChange={(event) => handleInputChange('email' , event.target.value) } 
            id="email" 
            type="email" 
            name="email" 
            value={enteredValues.email}
          />
          <div className="control-error">{emailIdInvalid && <p>please enter a valid email address</p>}</div>
          
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" 
          type="password" 
          name="password" 
          onChange={(event) => handleInputChange('password' , event.target.value) }
          value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        
        {/* THE DEFAULT TYPE OF A BUTTON INSIEDE A FORM IS SUBMIT*/}
        {/* YOU CAN CHANGE TAHT IF YOU SPECIFY THE TYEPE 
          for eg
        <button onClick = {handleSubmit} className="button" type="button">Login</button>
        */}

        {/* another way */}
        <button className="button" >Login</button>

        </p>
    </form>
  );
}
