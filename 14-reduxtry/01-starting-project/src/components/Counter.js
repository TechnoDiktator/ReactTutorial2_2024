import { counterActions } from '../store';
import classes from './Counter.module.css';

import {useSelector , useDispatch} from 'react-redux'



const Counter = () => {
  

  //so when we use the useSelector 
  //react-redux automatically 
  //instantiates a subscriptioin to the stores part tthat we are extracting here
  
  //whenever any of the data that we are accessing from our store changes
  //this componnet will rerender


  //WE HAVE MULTIPLE STAE SLICES NOW
  //YOU DRILL INTO THE variable
  const counter = useSelector(state => state.counter.counter);

  const toggle = useSelector(state => state.counter.showCounter)


  //WHEN THERE iS ONLY ONE STATE OBJECT this works fine
  // const counter = useSelector(state => state.counter);

  // const toggle = useSelector(state => state.showCounter)




  //dispatching actions
  const dispatch = useDispatch()

  const incrementhandler = () => {
    
    dispatch(counterActions.increment())
    
    //================================
    //OLD WAY WITHOUT REDUX TOOLIT
    //dispatch({type:'increment'})
  }
  const decrementHandler = () => {
    
    dispatch(counterActions.decrement())

    //=================================
    //OLD WAY WITHOUT REDUX TOOLIT
    //dispatch({type:'decrement'})
  }

  //we can add more to the payload
  const increaseHandler = () =>  {
    //the redux toolkit 
    //we have given our payload that is automatically recognized bu toolkit
    dispatch(counterActions.increase(5))

    //==================================
    //OLD WAY WITHOUT REDUX TOOLIT
    //dispatch({type:'increase' , amount:5})
  }

  const toggleCounterHandler = () => {
    dispatch({type:"toggle"})
  }


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle &&<div className={classes.value}>{counter}</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>

      <button onClick={incrementhandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={increaseHandler}>Increase By 5</button>

    </main>
  );
};

export default Counter;
