import { useState , useRef } from "react";

export default function Login() {


  const [emailIsInvalid , setEmailIsInvalid] = useState(false)
  const email = useRef()
  const password = useRef()



  //==================================================
  function handleSubmit(event){
    console.log("pressed")
    //this will preventthe from from refreshing
    event.preventDefault()
    console.log(enteredValues)

    const enteredEmail = email.current.value
    const enteredPassword = password.current.value

    console.log(enteredEmail , enteredPassword)
    const emailIsValid = enteredEmail.includes('@')

    if(!emailIsValid){
      setEmailIsInvalid(true)
      return
    }
    setEmailIsInvalid(false)
  
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
            id="email" 
            type="email" 
            name="email" 
            ref={email}
          />
          <div className="control-error">{emailIsInvalid && <p>Please enter a valid email address</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
            id="password" 
            type="password" 
            name="password"
            ref={password} 
            
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
