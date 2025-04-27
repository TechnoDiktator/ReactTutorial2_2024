import { use } from 'react'
import {useActionState} from 'react'
import { OpinionsContext } from '../store/opinions-context';

export function NewOpinion() {

  //what is the use hook doing here?
  //it is a custom hook that is used to manage the state of the form
  //it takes a function as an argument that is called when the form is submitted
  //the function takes the previous state and the form data as arguments

  const {addOpinion} = use(OpinionsContext)

  async function shareOpinionAction(prevState , formData) {
    const title = formData.get('title')
    const body = formData.get('body')
    const userName = formData.get('userName')
    let errors = []

    if (!title) {
      errors.push('Title is required')
    }
    if(title.trim().length < 5) {
      errors.push('Title must be at least 5 characters long')
    }
    if(body.trim().length < 10 || body.trim().length > 1000) {
      errors.push('Opinion must be between 10 and 1000 characters long')
    }

    if(!userName) {
      errors.push('User name is required')
    }
    if(userName.trim().length < 3) {
      errors.push('User name must be at least 3 characters long')
    }
    if(errors.length > 0) {
      return {
        enteredValues: {
          title: title,
          body: body,
          userName: userName
        },
        errors: errors

      }
    }

    //submit the form to the backend

    await addOpinion({
      title: title,
      body: body,
      userName: userName
    })

    return {
      errors: null
    }
    
  }

  const [formState , formAction] = useActionState(shareOpinionAction , {errors: null} ) 


  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input type="text" id="userName" name="userName"  defaultValue={formState.enteredValues?.userName}/>
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input 
            type="text" 
            id="title" 
            name="title" 
            defaultValue={formState.enteredValues?.title} />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" 
          name="body" 
          rows={5}
          defaultValue={formState.enteredValues?.body}
          ></textarea>
        </p>


        {formState.errors && <ul className='errors'>
          {formState.errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>}

        <p className="actions">
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
}
