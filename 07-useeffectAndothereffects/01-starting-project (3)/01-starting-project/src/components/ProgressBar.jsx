import { useState , useEffect } from "react"


const TIMER = 5000
export default function ProgressBar({timer}){
    const [remainingTime , setRemainingTime ] = useState(timer)
    

  useEffect(() =>{
     
    const interval =setInterval(() => {
      console.log('INTERVAL' , remainingTime)
      setRemainingTime(prevTime => prevTime - 10);
    } , 10)

    //clean up function to clean up the setInterval
    //otherwise it will keep on ronning till TIMER runs out
    //and the bad thing is that setInterval does
    //not execute every millisecond

    //so it understands time differently
    return () => {
      clearInterval(interval)
    }

  } , [])

  return <progress value={remainingTime} max={timer}></progress>
    
}