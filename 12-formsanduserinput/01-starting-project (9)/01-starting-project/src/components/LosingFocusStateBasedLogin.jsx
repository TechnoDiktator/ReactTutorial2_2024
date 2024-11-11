import { useState } from "react";
import Input from "./Input";
export default function LosingFocusStateBasedLogin() {


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


  //to check if an input field has been filled previously
  //and the user has lost focus from it and
  //moved to another field
  const [didEdit , setDidEdit] = useState({
    email:false,
    password:false
  })

    //VALIDATING FLAGS
    const emailIdInvalid = didEdit.email &&
                             !enteredValues.email.includes('@')
    
    
    function handleInputBlur(identifier) {
        setDidEdit( (prev) => ({
            ...prev,
            [identifier] :true
        }));
    }


    





  function handleInputChange(identifier , value){
    setEnteredValues(prevValues => {
      return {
        ...prevValues,
        [identifier]:value
      }

    })
    //as soo as user starts typing again we remove the error 
    //the we wait for the user to lose focus
    setDidEdit((prevEdit) => ({
        ...prevEdit,
        [identifier]:false
    }))
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
            onBlur={() => handleInputBlur('email')}
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
