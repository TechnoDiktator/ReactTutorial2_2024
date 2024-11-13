//here we will try to run redux and learn about it
const redux = require('redux')



/*
The reducer function in a Redux store must be a pure function to ensure that state management in your application remains predictable, reliable, and easy to debug. Here’s why purity and lack of side effects are essential in a reducer function:

1. Predictability of State Updates
A pure function always returns the same output given the same input. In the context of a reducer, this means that whenever an action is dispatched, you can reliably expect the state to change in a specific, consistent way. This predictability is fundamental to Redux because it helps ensure that the state evolves in an expected manner.
2. Enabling Time Travel and Debugging
Redux provides tools like the Redux DevTools, which allow you to "time travel" through different states by going back and forth in the action history. This only works if each action produces a predictable and independent state update. Side effects (like API calls or modifying external variables) would make this unpredictable, as the state would depend on external factors that might change over time or between dispatches.
3. Improved Testing
Pure functions are much easier to test. Since a reducer is a pure function, you can pass it a set of inputs (state and action) and verify the output without needing to mock other parts of the application or account for unpredictable factors. This leads to more reliable unit tests and makes it easier to confirm that your logic is correct.
4. State Consistency and Immutability
Reducers should ideally produce a new state object instead of modifying the existing one. This immutable approach to state helps prevent accidental bugs that might arise from direct state modification, especially in a large application with many interconnected parts. If reducers had side effects, there would be a higher risk of inconsistent states and harder-to-track bugs.
Handling Side Effects with Middleware
To handle side effects (like API calls or local storage updates), Redux encourages the use of middleware (such as redux-thunk or redux-saga). Middleware intercepts actions and handles asynchronous operations before passing actions to the reducer. This setup keeps the reducer pure, with side effects managed separately.

*/
//a reduscer funtion will receive 2 things 
//the current state and the action to perform
const counterReducer = (state = {counter:0}, action) => {
    if(action.type === 'INCREMENT'){
        return {
            counter:state.counter + 1
        }
    }else if(action.type === 'DECREMENT') {
        return {
            counter:state.counter - 1
        }
    }
    return state

}
//it returns the new updated state
//it has to be a PURE function 
//that is you cannot put any sideeffects in side it


//pass the reducer to the store
//the reducer will contain the astate updating capability
const store = redux.createStore(counterReducer)


console.log(store.getState())



const counterSubscriber = () => {
    
    

    const lateststate = store.getState()//gives us the latest state ssnapshot
    console.log(lateststate)
}   

//so the subscriber is subscribing to this store
store.subscribe(counterSubscriber)



//when a store gets created then reduux automatically exexutes it for 
//the first time SO WE NEED TO GIVE IT A DEFAULT VALUE


//store.dispatch({type:"INCREMENT"})
// store.dispatch({type:"INCREMENT"})
// store.dispatch({type:"INCREMENT"})
store.dispatch({type:"INCREMENT"})
store.dispatch({type:"DECREMENT"})
store.dispatch({type:""})






























