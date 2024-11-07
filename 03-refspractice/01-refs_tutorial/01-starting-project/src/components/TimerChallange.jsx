
import { useState , useRef } from 'react';
import ResultModal from './ResultModal';





export default function({title , targettime}) {
    
    const [timeRemaining , setTimeRemaining]  = useState(targettime*1000)
    
    const timerIsActive = timeRemaining > 0 && timeRemaining < targettime*1000

    // const [timerStartted , setTimerStarted] = useState(false)
    // const [timerExpired , setTimerExpired] = useState(false)

    //will store the reference of the setTimeOut clock
    //change is the useref does not result in rerender
    
    //=====================
    const timer = useRef()
    
    
    //you cannot pass a useRef in the form of a prop
    //to another component in react
    //to do this we have to use the forwardRef
    const dialog = useRef()
    //=====================


    if (timeRemaining <= 0){
        clearInterval(timer.current)
        //setTimeRemaining(targettime*1000)
        dialog.current.open()
    }   

    function handleStart() {
        
        //no need as we are not using setTimeout
        //setTimerStarted(true)
        
        //the ref is storeing the setTimeouts clock reference 
        //this will help us use the clear timeout on it
        //also as the timer ref is inside is inside the 
        //componenet it is refreshed everytime the componenet rerenders
        //this all the tim=les of the games will work

        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10)
        
            // setTimerExpired(true)

            //the built in <dialog> tag in react has a method called showModal()
            //dialog.current.showModal()
            
            //but we willnot use that 
            //instead we will use a clever way
            //calledthe useimperative modal
            // dialog.current.open()

        } , 10)
        
    }

    function handleReset() {
        setTimeRemaining(targettime * 1000)
    }

    function handleStop() {
        //clearTimeout(timer)
        clearInterval(timer.current)
        dialog.current.open()
    }
    
    return (<>
            <ResultModal ref = {dialog}  targetTime={targettime} remainingTime= {timeRemaining}  onReseting={handleReset}></ResultModal>
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time"> {targettime} second {targettime > 1 ? 's' : ''} </p>
                <p>
                    <button onClick={ timerIsActive ? handleStop: handleStart}>
                        {timerIsActive ? "Stop":"Start"} Challange
                    </button>
                </p>

                <p className={timerIsActive ? 'active' : undefined }>
                    { timerIsActive ? 'Timer is Running ....':'Timer Inactive'}
                </p>

            </section>
        </>
    )
}